<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
    <head>
        <title>修改栏目</title>
        <meta http-equiv="content-type" content="text/html;charset=utf-8">
        <link href="<?php echo ADMIN_CSS; ?>mine.css" type="text/css" rel="stylesheet">
    </head>

    <body>

        <div class="div_head">
            <span>
                <span style="float:left">当前位置是：栏目管理-》修改栏目信息</span>
                <span style="float:right;margin-right: 8px;font-weight: bold">
                    <a style="text-decoration: none" href="/article_thinkphp/index.php/Admin/Type/showlist">【返回】</a>
                </span>
            </span>
        </div>
        <div></div>

        <div style="font-size: 13px;margin: 10px 5px">
            <form action="/article_thinkphp/index.php/Admin/Type/update" method="post" enctype="multipart/form-data">
            <table border="1" width="100%" class="table_a" >
                <tr>
                    <td>栏目名称</td>
                    <td ><input type="text" name="typename" value="<?php echo ($typename); ?>" /></td>
                    <td ><input type="hidden" name="id" value="<?php echo ($typeid); ?>" /></td>
                </tr>
                <tr>
                    <td>栏目分类</td>
                    <td>
                        <select name="f_goods_category_id">
                            <option>请选择</option>
                            <option>家用电器</option>
                            <option>手机数码</option>
                            <option>电脑办公</option>
                            <option>服饰鞋帽</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>栏目品牌</td>
                    <td>
                        <select name="f_goods_brand_id">
                            <option>请选择</option>
                            <option>苹果</option>
                            <option>诺基亚</option>
                            <option>HTC</option>
                            <option>摩托罗拉</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>栏目价格</td>
                    <td><input type="text" name="f_goods_price" value="1239.99" /></td>
                </tr>
                <tr>
                    <td>栏目图片</td>
                    <td><input type="file" name="f_goods_image" value="<?php echo ADMIN_IMG ?>2013-12-33.jpg" /></td>
                </tr>
                <tr>
                    <td>栏目详细描述</td>
                    <td >
                        <div >
                            <textarea name="f_goods_introduce"  >卓越的纤薄设计，却依然为更大的显示屏和更快的芯片预留了空间。超快无线网络连接也不会牺牲电池使用时间。全新耳机带来绝佳音效和非凡贴合的舒适度。如此众多的精彩功能融入这款 iPhone，如此，你才可以享受它的精彩更多。</textarea>
                        </div>
                    </td>
                </tr>
                
                <tr>
                    <td colspan="2" align="center">
                        <input type="submit" value="修改">
                    </td>
                </tr>  
            </table>
            </form>
        </div>
    </body>
</html>