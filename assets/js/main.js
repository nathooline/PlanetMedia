$(document).ready(function () {

   cargarHeader();
   cargarSlider();
   cargarFooter();
   cargarContenido();
   $("button").click(function(){
      $.ajax({url: "contenido/registro-usuario.html #registro-usuario", success: function(result){
        $("#contenido").html(result);
      }});
    });

    $('body').on('submit','#registro-usuario',function(e){
      e.preventDefault();
      alert("Estas a punto de enviar un formulario");
    });
    

    function cargarHeader(){
      $.ajax({url: "contenido/header.html #registro-usuario", success: function(result){
         $("#header").html(result);
       }});
    }

    function cargarSlider(){
      $.ajax({url: "contenido/slider.html #registro-usuario", success: function(result){
         $("#slider").html(result);
       }});


       $('body').on('#contenido2').click(function(e){
         e.preventDefault();
        $.ajax({url: "contenido/contenido2.html #registro-usuario", success: function(result){
          $("#contenido").html(result);
        }});
      });
  
    }

    function cargarContenido(){
      $.ajax({url: "contenido/contenido.html #registro-usuario", success: function(result){
         $("#contenido").html(result);
       }});
    }

    function cargarFooter(){
      $.ajax({url: "contenido/footer.html #registro-usuario", success: function(result){
         $("#footer").html(result);
       }});
    }

    
   });