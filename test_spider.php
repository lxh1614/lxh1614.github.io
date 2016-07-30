<?php

	/*
     * @params $url
     * @params string $method
     * @params array $args
     * @params bool $json
     * @return string
     */
    function curlRequest($url, $method='get', $args=[], $json=false) {	
        $url = $url;
        $method = $method;
        $data = $args;
        if($json) {
            $headers = array(
                'Accept: application/json',
                'Content-Type: application/json',
             );
            $data = json_encode($args);
        }
        $url_arr = parse_url($url);

        $handle = curl_init();
        curl_setopt($handle, CURLOPT_URL, $url);
        if($json) curl_setopt($handle, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
		
        if($url_arr['scheme']=='https') {
            curl_setopt($handle, CURLOPT_SSL_VERIFYHOST, false);
            curl_setopt($handle, CURLOPT_SSL_VERIFYPEER, false);
        }
        switch (strtoupper($method)) {
            case 'GET':
                break;
            case 'POST':
                curl_setopt($handle, CURLOPT_POST, 1);
                if(is_array($data)) {
                    curl_setopt($handle, CURLOPT_POSTFIELDS, http_build_query($data));
                }
                else {
                    curl_setopt($handle, CURLOPT_POSTFIELDS, $data);
                }
                break;
            case 'PUT':
                curl_setopt($handle, CURLOPT_CUSTOMREQUEST, 'PUT');
                curl_setopt($handle, CURLOPT_POSTFIELDS, $data);
                break;
            case 'DELETE':
                curl_setopt($handle, CURLOPT_CUSTOMREQUEST, 'DELETE');
                curl_setopt($handle, CURLOPT_POSTFIELDS, $data);
                break;
        }
        ob_start();
        $response = curl_exec ($handle);
        ob_end_clean();
        curl_close ($handle);
        return $response;
    }
	
	
	function http_get_data($url) {  
          
        $ch = curl_init ();  
        curl_setopt ( $ch, CURLOPT_CUSTOMREQUEST, 'GET' );  
        curl_setopt ( $ch, CURLOPT_SSL_VERIFYPEER, false );  
        curl_setopt ( $ch, CURLOPT_URL, $url );  
        ob_start ();  
        curl_exec ( $ch );  
        $return_content = ob_get_contents ();  
        ob_end_clean ();  
          
        $return_code = curl_getinfo ( $ch, CURLINFO_HTTP_CODE );  
        return $return_content;  
    }  
      
	
	$souhuurl = "http://business.sohu.com/20160721/n460249452.shtml";
	$souhuhtml =  curlRequest($souhuurl);
	
	preg_match('/<div class="text clear" id="contentText">(.*)isOriginal/is', $souhuhtml, $result);
	
	$content =  substr($result[1], 0, -260);
	
	preg_match_all('/img src="([^"]*)"/', $result[1], $resultimgs);
	
	var_dump($resultimgs);
	
	foreach($resultimgs[1] as $img) {
		
        $return_content = http_get_data($img);  
		
        $filename = md5($img).".jpg";  
        $fp= @fopen("newpath/".$filename, "aw"); //将文件绑定到流    
        fwrite($fp,$return_content); //写入文件
		
	}
	
	
	exit;
	
	
	
	
	//$baidu =  curlRequest('http://www.baidu.com');
	
	//preg_match('/<p id="lg"><img src="([^"]*)" width="270" height="129"><\/p>/',  $baidu, $result);
	?>
	
	 
	 <img src="<?php echo $result[1]; ?>">
	