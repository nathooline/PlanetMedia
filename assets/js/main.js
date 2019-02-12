$(document).ready(function () {

   cargarHeader();
   cargarSlider();
   cargarFooter();
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

    function cargarSlider(){
      $.ajax({url: "contenido/slider.html #registro-usuario", success: function(result){
         $("#header").html(result);
       }});
    }

    function cargarFooter(){
      $.ajax({url: "contenido/header.html #registro-usuario", success: function(result){
         $("#header").html(result);
       }});
    }
   });