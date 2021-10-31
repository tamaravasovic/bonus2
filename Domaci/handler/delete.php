<?php
require "../dbBroker.php";
require "../model/prijava.php";

if(isset($_POST['id'])){

    $obj=new Prijava($_POST['id']);
    $response=$obj->deleteById($conn);
    if($response){
        echo("Success");
    }
    else echo("Remove");
}
?>