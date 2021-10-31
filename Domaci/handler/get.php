<?php
require "../dbBroker.php";
require "../model/prijava.php";
if(isset($_POST['id'])){

   $res= Prijava::getById($_POST['id'],$conn);
   if($res){
      echo($res['predmet']);
      echo("/");
      echo($res['sala']);
      echo("/");
      echo($res['katedra']);
      echo("/");
      echo($res['datum']);
   }
}
