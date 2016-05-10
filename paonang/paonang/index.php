<?php
header("Cache-Control:no-cache");
        //const APP_ID = 'wxb80bcbf68dd70ce6';
        const APP_ID = 'wx4bb4c87ef9957e01'; //fang 测试
        //const APP_SECRET = 'f320b683b1689e443915842d3a18d055';
        const APP_SECRET = '14a5725e97c01b3f2b96ac8ccf4315eb'; //fang 测试

        const MKEY_ACCESSTOKEN = 'CHINABLUETV::WEIXIN_ACCESSTOKEN';
        const COOKIE_KEY = 'CBTV_USERINFO';

class Mcache {

    private static $instance = null;

    static public function getInstance() {
        if (is_null(self::$instance)) {
            $memcache = new Memcache();
            $memcache->addServer('10.1.101.124', 11211);
            $memcache->addServer('10.1.101.126', 11211);
            self::$instance = $memcache;
        }
        return self::$instance;
    }

}

if (!isset($_GET['4free'])) {
	
    $cbtvInfoJson = isset($_COOKIE[COOKIE_KEY]) ? $_COOKIE[COOKIE_KEY] : '';
    $cbtvInfo = json_decode($cbtvInfoJson, true);
    $code = isset($_GET['code']) ? $_GET['code'] : '';
    if (!$code) {
        $redirect_url = 'http://121.43.96.30/paonang/?';
        //$redirect_url = 'http://open.cztv.com/api/wx_tv/static/2016/foolsday/?';
        $redirect_url .= (isset($_GET['4free'])?'&4free=':'');
        $redirect_url .= (isset($_GET['name'])?('&name='.$_GET['name']):'');
        $redirect_url .= (isset($_GET['pos'])?('&pos='.$_GET['pos']):'');     
        $url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4bb4c87ef9957e01&redirect_uri='.urlencode($redirect_url).'&response_type=code&scope=snsapi_base&state=' . time() . '#wechat_redirect';        
        header('Location:' . $url);
        //exit;
    }else{
    	echo $code;	
    }
    
    $url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=' . APP_ID . '&secret=' . APP_SECRET . '&code=' . $code . '&grant_type=authorization_code';
    $userInfo = json_decode(file_get_contents($url), true);
    var_dump($userInfo);
    die;
    $openid = isset($userInfo['openid']) ? $userInfo['openid'] : '';
    //是否展现正常内容
    $showFlag = false;
    if ($cbtvInfo && $cbtvInfo['openid'] == $openid && $cbtvInfoJson['subscribe'] == 1) {
        $showFlag = true;
    } else if ($code) {
        //    获取access_token
        $mem = Mcache::getInstance();
        $accessToken = $mem->get(MKEY_ACCESSTOKEN);
        if ($accessToken === false) {
            $urlAccessToken = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' . APP_ID . '&secret=' . APP_SECRET;
            $jsonAccessToken = file_get_contents($urlAccessToken);
            $dataAccessToken = json_decode($jsonAccessToken, true);
            if (isset($dataAccessToken['access_token']) && $dataAccessToken['access_token']) {
                $accessToken = $dataAccessToken['access_token'];
                $mem->set(MKEY_ACCESSTOKEN, $accessToken, false, 3600);
            } else {          	
                exit;
            }
        }
        $url = 'https://api.weixin.qq.com/cgi-bin/user/info?access_token=' . $accessToken . '&openid=' . $openid . '&lang=zh_CN';
        $cbtvInfoJson = json_decode(file_get_contents($url), true);
        if (!isset($cbtvInfoJson['subscribe'])) {
            if ($cbtvInfoJson['errcode'] == 40003) {
                $showFlag = false;
            } else {
                $showFlag = true;
            }
        } else if ($cbtvInfoJson['subscribe'] == 1) {
            $cbtvInfo = array(
                'subscribe' => $cbtvInfoJson['subscribe'],
                'openid' => $cbtvInfoJson['openid']
            );
            setcookie(COOKIE_KEY, json_encode($cbtvInfo), time() + 600, '/', 'cztv.com');
            $showFlag = true;
        }
    }
} else {
    $showFlag = true;
}
?>
<!DOCTYPE html>
<html style="height:100%;">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
    <title>跑男工作证H5</title>
<!--Adobe Edge Runtime-->
    <script type="text/javascript" charset="utf-8" src="edge_includes/edge.6.0.0.min.js"></script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js">//1</script> 
    <script type="text/javascript" src="js/fenxiang.js">//1</script> 
    <script type="text/javascript" charset="utf-8" src="js/jquery-1.9.1.min.js"></script>


    <style>
        .edgeLoad-EDGE-26251823 { visibility:hidden; }
    </style>
<script>
	var isSubscribe = true;//false;
   AdobeEdge.loadComposition('index', 'EDGE-26251823', {
    scaleToFit: "none",
    centerStage: "none",
    minW: "0px",
    maxW: "undefined",
    width: "100%",
    height: "100%"
}, {dom: [ ]}, {dom: [ ]});
</script>
<!--Adobe Edge Runtime End-->
<script type="text/javascript">
    //浏览器判断
    var ua = {                      //3
        android: false,
        android2: false,
        iphone: false,
        ipad: false,
        pc: false,
        wechat: false,
        chinabluenews: false
    };
    (function () {
        var ua_str = window.navigator.userAgent.toLowerCase();
        
        
        if (/micromessenger/.test(ua_str)) {
            ua.wechat = true;
            ua.chinabluenews = false;
        }
    })();
</script>
<style>

    .loading{background:#ffae01;width:750px;height:1334px;position: absolute;z-index: 0;}
    .loadingimg{width:750px;height:1334px; top:0;left:0;}
    .follow{position: absolute;top:0;left: 0; z-index:1;width:100%;}
    .sb{width:70%;top:81%;height:10%;position: fixed;z-index: 999;left:15%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
</style>

</head>
<body style="margin:0;padding:0;height:100%;">
    <img src="images/300300.jpg" alt="" style="display:none;">
    <img class="follow" src="images/follow.jpg" alt="">
    <div class="loading">
        <img class="loadingimg" src="images/loading.jpg" alt="">
    </div>

    <div id="Stage" class="EDGE-26251823">
    
    </div>
    <div>
    <div class="sb"></div></div>
    
    <script>

$(function(){
    $(".follow").hide();
    <?php 
    		if(!isset($_GET['4free'])&&!$showFlag&&($_GET['name']==''||$_GET['pos']=='')){
    		    echo  '$(".follow").fadeIn();';
    		}
    ?>
    //function follow(){
        //$(".follow").fadeIn();
    //}
    //follow();

  
        
  
    function init2(){
        w=$(window).width();//获取浏览器宽
        h=$(window).height();//获取浏览器高
        bl=h/w
                            //alert(bl)
        w1=w/750;//宽的比例
        h1=h/1334;//高的比例
        wxx=(w-750)/2;//X坐标位置
        wy=(h-1334)/2; //y坐标位置
                            //判断比例
        if(w1<h1){
            w0=h1;
            h0=w1;
        }else{
            w0=w1;
            h0=h1;
        }
       // $(".follow").css('left',wxx).css('top',wy).css('transform','scale('+w0+','+w0+')');
        $(".loading").css('left',wxx).css('top',wy).css('transform','scale('+w0+','+w0+')');
    }
    init2();
    window.onresize=function(){ 
        init2();  
    }
});
    </script>

    <span style="display:none">
        <script type="text/javascript">
            var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
            document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Febf8a8028c76b35add2bcc96bdb8ac4a' type='text/javascript'%3E%3C/script%3E"));
        </script>
    </span>
    <script type="text/javascript">
        var _gsEditor = "";
        var _gsChannel = "/h5/201603/跑男工作证H5/";
    </script>
    <!-- Gridsum tracking code begin. -->
    <script type='text/javascript' src='http://static.gridsumdissector.com/js/Clients/GWD-000415-41FA83/gs.js'></script>
</body>
</html>