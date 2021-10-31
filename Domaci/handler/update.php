<?php 
require "../dbBroker.php";
require "../model/prijava.php";
if(isset($_POST['id'])){
 
    $id=$_POST['id'];
    $predmet=$_POST['predmet'];
    $katedra=$_POST['katedra']; 
    $datum=$_POST['datum'];
    $sala=$_POST['sala']; 

  $res=  new Prijava($id,$predmet,$katedra,$sala,$datum);
  $res->update($conn);
  if($res){
    echo("Success");
}else echo("Fail");

}
?>