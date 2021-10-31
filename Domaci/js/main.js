
  
  function change(id){
  
    document.getElementById("id1").value = id; 

  }


$('#dodajForm').submit(function(){
    event.preventDefault();
    console.log("Dodaj je pokrenuto");
    const $form = $(this);
    const $inputs = $form.find('input, select, button, textarea');
    const serijalizacija = $form.serialize();
    console.log(serijalizacija);
    
    request = $.ajax({
        url:'handler/add.php',
        type:'post',
        data:serijalizacija
    });

    request.done(function(response, textStatus, jqXHR){
        if(response==="Success"){
            alert("Kolokvijum je zakazan");
            console.log("Uspesno zakazivanje");
            location.reload(true);
        }
        else console.log("Kolokvijum nije zakazan "+ response);
        console.log(response);
    });

    request.fail(function(jqXHR, textStatus, errorThrown){
        console.error('Sledeca greska se desila: '+textStatus, errorThrown)
    });

});
$('#btn-obrisi').click(function(){

    console.log("Izbrisi je pokrenuto");
    //trazi cekiranu 
    const checked=$('input[name=checked-donut]:checked');
  
    
    request = $.ajax({
        url:'handler/delete.php',
        type:'post',
        //pristupa value polju input checka a to je idnjegov jedinstveni
        data:{'id':checked.val()}
    });

    request.done(function(response, textStatus, jqXHR){
        if(response==="Success"){
            checked.closest('tr').remove();
            alert('obrisan kolokvijum');
        }
        else console.log("Kolokvijum nije obrisan "+ response);
        console.log(response);
    });

    

});
$('#izmeniForm').submit(function(){
    
    const checked=$('input[name=checked-donut]:checked');
   
    const $form = $(this);
    const $inputs = $form.find('input, select, button, textarea');
    const serijalizacija = $form.serialize();

request=$.ajax({
    url:'handler/update.php',
    type:'post',
    data:serijalizacija
});
request.done(function(response, textStatus, jqXHR){
    
    console.log(response);
});
});

$('#btn-izmeni').click(function(){
    id=$('input[name=checked-donut]:checked').val();
    
    //change(id);
    request=$.ajax({
        url:'handler/get.php',
        type:'post',
        data:{"id":id}
    });
    document.getElementById("id1").value = id; 
    request.done(function(response){
        r=response.split('/');
        document.getElementById("predmet1").value = r[0]; 
        document.getElementById("sala1").value = r[1]; 
        document.getElementById("katedra1").value = r[2]; 
        document.getElementById("datum1").value = r[3]; 
    })
});