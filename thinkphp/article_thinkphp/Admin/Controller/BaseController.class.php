<?php
namespace Admin\Controller;

use Think\Controller;

class BaseController extends Controller 
{

	public function __construct(){
		parent::__construct();
		$this->checkLogin();
	}

	public function checkLogin(){
		if (!$_SESSION['admin']) {
			$this->error('please login first ',U('Login/login'));
		}else{
			$this->assign('admin',session('admin'));
			$this->assign('admin',session('admin')['id']);

		}
	}
}