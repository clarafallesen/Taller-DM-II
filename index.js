$(document).ready(function(){

  $("#botonTODOS").click(function() { /*Boton scrolldown*/

    $(".artTODOS").show();
    $(".artNOTAS").show();
    $(".artFOTO").show();
    $(".artBLOG").show();
    $(".artCURIOSIDADES").show();
  });

  $("#botonNOTAS").click(function() { /*Boton scrolldown*/
    $(".artTODOS").hide();
    $(".artFOTO").hide();
    $(".artBLOG").hide();
    $(".artCURIOSIDADES").hide();

    $(".artNOTAS").show();
  });

  $("#botonFOTO").click(function() { /*Boton scrolldown*/
    $(".artTODOS").hide();
    $(".artNOTAS").hide();
    $(".artBLOG").hide();
    $(".artCURIOSIDADES").hide();

    $(".artFOTO").show();
  });

  $("#botonBLOG").click(function() { /*Boton scrolldown*/
    $(".artTODOS").hide();
    $(".artNOTAS").hide();
    $(".artFOTO").hide();
    $(".artCURIOSIDADES").hide();

    $(".artBLOG").show();
  });

  $("#botonCURIOSIDADES").click(function() { /*Boton scrolldown*/
    $(".artTODOS").hide();
    $(".artNOTAS").hide();
    $(".artFOTO").hide();
    $(".artBLOG").hide();

    $(".artCURIOSIDADES").show();
  });

});
