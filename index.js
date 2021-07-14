$(document).ready(function(){

  $("#botonTODOS").click(function() { /*Boton scrolldown*/

    $(".artLECTOR").show();
    $(".artNOTAS").show();
    $(".artFOTO").show();
    $(".artBLOG").show();
    $(".artCURIOSIDADES").show();
  });

  $("#botonNOTAS").click(function() { /*Boton scrolldown*/
    $(".artLECTOR").hide();
    $(".artFOTO").hide();
    $(".artBLOG").hide();
    $(".artCURIOSIDADES").hide();

    $(".artNOTAS").show();
  });

  $("#botonFOTO").click(function() { /*Boton scrolldown*/
    $(".artLECTOR").hide();
    $(".artNOTAS").hide();
    $(".artBLOG").hide();
    $(".artCURIOSIDADES").hide();

    $(".artFOTO").show();
  });

  $("#botonBLOG").click(function() { /*Boton scrolldown*/
    $(".artLECTOR").hide();
    $(".artNOTAS").hide();
    $(".artFOTO").hide();
    $(".artCURIOSIDADES").hide();

    $(".artBLOG").show();

    $("#botonBLOG").removeClass("NO-seleccionado");
    $("#botonBLOG").addClass("SI-seleccionado");

    $("#botonFOTO").removeClass("SI-seleccionado");
    $("#botonCURIOSIDADES").removeClass("SI-seleccionado");
    $("#botonNOTAS").removeClass("SI-seleccionado");
    $("#botonLECTOR").removeClass("SI-seleccionado");

    $("#botonFOTO").addClass("NO-seleccionado");
    $("#botonCURIOSIDADES").addClass("NO-seleccionado");
    $("#botonNOTAS").addClass("NO-seleccionado");
    $("#botonLECTOR").addClass("NO-seleccionado");

  });

  $("#botonCURIOSIDADES").click(function() { /*Boton scrolldown*/
    $(".artLECTOR").hide();
    $(".artNOTAS").hide();
    $(".artFOTO").hide();
    $(".artBLOG").hide();

    $(".artCURIOSIDADES").show();
  });

  $("#botonLECTOR").click(function() { /*Boton scrolldown*/
    $(".artCURIOSIDADES").hide();
    $(".artNOTAS").hide();
    $(".artFOTO").hide();
    $(".artBLOG").hide();

    $(".artLECTOR").show();
  });

});
