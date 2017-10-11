<?php
namespace app\api\controller;

class Gongyinperson extends \think\Controller {
    
    public function getfinish(){
    		$gongyinPerson_list=db("alert")
    					->field("word,username,addtime")
    					->where("status=1&&catid=3")
    					->select();
    		return json($gongyinPerson_list);
    }

        public function getdoing(){
            $gongyinPerson_list=db("alert")
                        ->field("word,username,addtime")
                        ->where("status=3&&catid=3")
                        ->select();
            return json($gongyinPerson_list);
    }
            public function getreject(){
            $gongyinPerson_list=db("alert")
                        ->field("word,username,addtime")
                        ->where("status=0&&catid=3")
                        ->select();
            return json($gongyinPerson_list);
    }


}
?>