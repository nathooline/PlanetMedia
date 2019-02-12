$(document).ready(function () {

   cargarHeader();

   $("button").click(function(){
      $.ajax({url: "contenido/registro-usuario.html #registro-usuario", success: function(result){
        $("#contenido").html(result);
      }});
    });

    function cargarHeader(){
      $.ajax({url: "contenido/header.html #registro-usuario", success: function(result){
         $("#header").html(result);
       }});
    }





   });