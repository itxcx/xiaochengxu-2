<?php
namespace app\api\controller;
class Updata extends \think\Controller {   
    public function basedata(){
            $userid=input('userid');
            $email=input('email');
    		$department=input('department');
            $career=input('career');
            $QQ=input('QQ');
            $ali=input('ali');
            $data = array('email'=>$email,'department'=>$department,'career'=>$career,'qq'=>$QQ,'ali'=>$ali);
            $user=db("member")
            ->where("userid=$userid")
            ->setField($data);  
            var_dump($userid);     
        }
        public function companydata(){
            $userid=input('userid');
            $companyname=input('companyname');
            $hangye=input('hangye');
            $tpye=input('tpye');
            $adress=input('adress');
            $range=input('range');
            $start=input('start');
            $scale=input('scale');
            $sellgoods=input('sellgoods');
            $buygoods=input('buygoods');
            $data = array('company'=>$companyname,'role'=>$hangye,'trade'=>$tpye,'support'=>$adress,'inviter'=>$range,'note'=>$start,'black'=>$scale,'auth'=>$sellgoods,'authvalue'=>$buygoods);
            $user=db("member")
            ->where("userid=$userid")
            ->setField($data); 
            var_dump($userid);
      
        }
}
?>