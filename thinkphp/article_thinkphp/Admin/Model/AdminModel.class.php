<?php
namespace Admin\Model;
use Think\Model;
class AdminModel extends Model {
     #array(验证字段1,验证规则,错误提示,[验证条件,附加规则,验证时间]),
protected $_validate = array(     
    array('user','require','管理名称不能为空！'), 
    array('password','require','帐号密码不能为空！'), 
   # array('value',array(1,2,3),'值的范围不正确！',2,'in'),  
   # array('repassword','password','确认密码不正确',0,'confirm'),   
  #  array('password','checkPwd','密码格式不正确',0,'function'),
    );

	public function checkLogin($user,$password){
		$condition['user'] = $user;
		$condition['password'] = md5($password);
		if ($admin = $this->where($condition)->find()) {
			session('admin',$user);
			return true;
		}else{
			return false;
		}
		
	}
}