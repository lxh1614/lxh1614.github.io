<?php

class MCache {

    static function Mem() {
        static $memcache;
        if (is_null($memcache)) {
            $memcache = new Memcache;
            $memcache->addServer('cms-memcache', 11211);
            $memcache->addServer('10.1.101.124', 11211);
            $memcache->addServer('10.1.101.126', 11211);
        }
        return $memcache;
    }

}

class FilterWords {

    static function filter($str) {
        $mem = MCache::Mem();
        $mem_key = "chinabluenews_filter_words::";
        $words = $mem->get($mem_key);

        if (!$words) {
            $filter_words_str = file_get_contents('/web/commit.open.cztv.com/mobileapp/_code/lib/filterwords.txt');
            $words = explode('|', $filter_words_str);
            $mem->set($mem_key, $words, false, 600);
        }
        return self::preg_match_array($words, $str);
    }

    static function preg_match_array($pattern_array, $subject) {
        $result = 0;
        foreach ($pattern_array as $v) {
            $result |= preg_match('/' . $v . '/', $subject);
        }
        return $result;
    }

}

//if (strpos($_SERVER['HTTP_REFERER'], 'cztv.com') === false) {
//    exit;
//}

$text1 = $_GET['name'];
//if (FilterWords::filter(str_replace(' ', '', $text1))) {
    //$text1 = '';
//}
$pos = intval($_GET['pos']);
$poses = array(
    '鹿晗助理',
    '陈赫助理',
    '邓超助理',
    'Angelababy助理',
    '郑恺助理',
    '李晨助理',
    '王祖蓝助理',
    '艺人统筹'
);
$pos--;
$pos = ($pos >= 0) ? $pos : 1;
$text2 = $poses[$pos];
try {
    $image = new Imagick(dirname(__FILE__) . '/images/bg_1.jpg');
    $image->setimageformat('jpg');
    $draw = new ImagickDraw();
    $draw->setFont(dirname(__FILE__) . '/images/heiti.ttf');
    $draw->setFontSize('26');
    $textColor = new ImagickPixel('#333333');
    $draw->setFillColor($textColor);
    $lenText1 = strlen($text1);
    $image->annotateImage($draw, (365-intval($lenText1/3)*10), 770, 5, $text1);
    if ($pos == 3) {
        $image->annotateImage($draw, 280, 830, 5, $text2);
    } else {
        $image->annotateImage($draw, 320, 830, 5, $text2);
    }
    ob_clean();
    header("Content-Type: image/jpeg");
    echo $image;
} catch (Exception $ex) {
    echo $ex->getMessage();
}