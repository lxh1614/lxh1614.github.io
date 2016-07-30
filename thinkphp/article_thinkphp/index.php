<?php

define('APP_DEBUG',true);
define('ADMIN_CSS','/article_thinkphp/Admin/Public/css/');
define('ADMIN_IMG','/article_thinkphp/Admin/Public/img/');
define('ADMIN_VIEW','/article_thinkphp/index.php/Admin/Index');//__CONTROLLER__

include "../ThinkPHP/ThinkPHP.php"
#引入thinkphp框架
#系统常量
#__ROOT__ => /article_thinkphp/index.php/Admin/Index /article_thinkphp： 会替换成当前网站的地址（不含域名） 
#__APP__ =>  /article_thinkphp/index.php： 会替换成当前应用的URL地址 （不含域名）
#__MODULE__ => /article_thinkphp/index.php/Admin：会替换成当前模块的URL地址 （不含域名）
#__CONTROLLER__ => /article_thinkphp/index.php/Admin/Index/
#__ACTION__ => /article_thinkphp/index.php/Admin/Index/index：会替换成当前操作的URL地址 （不含域名）
#__SELF__ => /article_thinkphp/index.php/Admin/Index/index/id/1： 会替换成当前的页面URL 
#__PUBLIC__ => /article_thinkphp/Public：会被替换成当前网站的公共目录 通常是 /Public/

?>
