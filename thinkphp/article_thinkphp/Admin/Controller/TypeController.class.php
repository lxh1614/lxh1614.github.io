<?php
namespace Admin\Controller;

use Think\Controller;

class TypeController extends BaseController
{

    public function showlist()
    {
        $typename = D('type');
        $result = $typename->select();//get data from table of database
        // $this->assign('res',$result);//set data to res then use volist to set page

        $count = $typename->count();
        $page = new \Think\Page($count, 5);
        $page->setConfig('prev', '上一页');
        $page->setConfig('next', '下一页');

        $show = $page->show();
        $list = $typename->limit($page->firstRow . ',' . $page->listRows)->select();
        $this->assign('res', $list);//赋值数据集
        $this->assign('page', $show);//赋值分页输出
        $this->display();
    }

    public function add()
    {
        if (IS_POST) {
            $data['typename'] = I('typename');//I 获取表单里name = typename的值
            $type = D('type');//get instance a table object
            if ($type->create($data)) {
                if ($type->add($data)) {
                    $this->success('add catcage success', U('showlist'), 2);//U :go to this method
                } else {
                    $this->error('add catcage fail');//go to this current page auto
                }
            } else {
                $this->error($type->getError());
            }
            return;
        }


        $this->display();
    }

    public function update()
    {
        if(IS_POST){
            $data['typename'] = I('typename');//I 获取表单里name = typename的值
            $data['id'] = I('id');//I 获取表单里name = typename的值
            $type = D('type');//get instance a table object
            if ($type->create($data)) {
                if ($type->save()) {
                    $this->success('update success', U('showlist'), 2);//U :go to this method
                } else {
                    $this->error('udpate fail');//go to this current page auto
                }
            } else {
                $this->error($type->getError());
            }
            return;
        }

        $typename = I('typename');
        $typeid = I('id');
        $this->assign('typename',$typename);
        $this->assign('typeid',$typeid);
        $this->display();
    }

    public function delete()
    {
       $id=  I('id');
       $type = D('type');
        if($type->delete($id)){
             $this->success('delete success', U('showlist'), 2);//U :go to this method
        } else {
            $this->error('delete fail');//go to this current page auto
        }
        
    }
}