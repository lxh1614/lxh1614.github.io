<?php
namespace Admin\Controller;

use Think\Controller;

class LoginController extends Controller
{


    public function login()
    {
        if (IS_POST) {
            $data['captcha'] = I('captcha');
            if($this->check_verify($data['captcha'])){
                 #$this->success('adsuccess','');//U :go to this method
            }else{
                $this->error('验证码错误','');//U :go to this method
                return;
            }
            unset($data['captcha']);
            $data['user'] = I('admin_user');//I 获取表单里name = admin_user的值
            $data['password'] = I('admin_psd');
            $admin = D('admin');//get instance a table object
            if ($admin->checkLogin($data['user'],$data['password'])) {
                
                $this->success('Login success', U('Index/index'), 2);//U :go to this method
                
            } else {
                $this->error($admin->getError());
            }
            return;
        }
        $this->display();
    }

    public  function logout(){
        session('[destroy]'); 
         $this->success('loginout success', U('login'), 2);//U :go to this method
    }


    public function code(){
        $Verify = new \Think\Verify();
        $Verify->fontSize = 30;
        $Verify->length   = 4;
        $Verify->useNoise = false;
        $Verify->fontttf = '5.ttf';
        $Verify->useImgBg = true; 
       # $Verify->useZh = true;
        $Verify->codeSet = '0123456789'; 
        $Verify->entry();
    }

    // 检测输入的验证码是否正确，$code为用户输入的验证码字符串
   public  function check_verify($code, $id = ''){   
     $verify = new \Think\Verify();    
     return $verify->check($code, $id);
 }
}