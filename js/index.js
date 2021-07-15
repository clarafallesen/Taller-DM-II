$(document).ready(function(){

  $("#botonTODOS").click(function() { /*Boton scrolldown*/

    $(".artNOTAS").show();
    $(".artFOTO").show();
    $(".artBLOG").show();
    $(".artCURIOSIDADES").show();
    $(".artLECTOR").show();



    $("#botonTODOS").removeClass("NO-seleccionado");
    $("#botonTODOS").addClass("SI-seleccionado");

    $("#botonNOTAS").removeClass("SI-seleccionado");
    $("#botonFOTO").removeClass("SI-seleccionado");
    $("#botonBLOG").removeClass("SI-seleccionado");
    $("#botonCURIOSIDADES").removeClass("SI-seleccionado");
    $("#botonLECTOR").removeClass("SI-seleccionado");

    $("#botonNOTAS").addClass("NO-seleccionado");
    $("#botonFOTO").addClass("NO-seleccionado");
    $("#botonBLOG").addClass("NO-seleccionado");
    $("#botonCURIOSIDADES").addClass("NO-seleccionado");
    $("#botonLECTOR").addClass("NO-seleccionado");
  });






  $("#botonNOTAS").click(function() { /*Boton scrolldown*/
    $(".artLECTOR").hide();
    $(".artFOTO").hide();
    $(".artBLOG").hide();
    $(".artCURIOSIDADES").hide();

    $(".artNOTAS").show();



    $("#botonNOTAS").removeClass("NO-seleccionado");
    $("#botonNOTAS").addClass("SI-seleccionado");

    $("#botonTODOS").removeClass("SI-seleccionado");
    $("#botonBLOG").removeClass("SI-seleccionado");
    $("#botonFOTO").removeClass("SI-seleccionado");
    $("#botonCURIOSIDADES").removeClass("SI-seleccionado");
    $("#botonLECTOR").removeClass("SI-seleccionado");

    $("#botonTODOS").addClass("NO-seleccionado");
    $("#botonBLOG").addClass("NO-seleccionado");
    $("#botonFOTO").addClass("NO-seleccionado");
    $("#botonCURIOSIDADES").addClass("NO-seleccionado");
    $("#botonLECTOR").addClass("NO-seleccionado");
  });

  $("#botonFOTO").click(function() { /*Boton scrolldown*/
    $(".artLECTOR").hide();
    $(".artNOTAS").hide();
    $(".artBLOG").hide();
    $(".artCURIOSIDADES").hide();

    $(".artFOTO").show();



    $("#botonFOTO").removeClass("NO-seleccionado");
    $("#botonFOTO").addClass("SI-seleccionado");

    $("#botonTODOS").removeClass("SI-seleccionado");
    $("#botonNOTAS").removeClass("SI-seleccionado");
    $("#botonBLOG").removeClass("SI-seleccionado");
    $("#botonCURIOSIDADES").removeClass("SI-seleccionado");
    $("#botonLECTOR").removeClass("SI-seleccionado");

    $("#botonTODOS").addClass("NO-seleccionado");
    $("#botonNOTAS").addClass("NO-seleccionado");
    $("#botonBLOG").addClass("NO-seleccionado");
    $("#botonCURIOSIDADES").addClass("NO-seleccionado");
    $("#botonLECTOR").addClass("NO-seleccionado");
  });






  $("#botonBLOG").click(function() { /*Boton scrolldown*/
    $(".artLECTOR").hide();
    $(".artNOTAS").hide();
    $(".artFOTO").hide();
    $(".artCURIOSIDADES").hide();

    $(".artBLOG").show();



    $("#botonBLOG").removeClass("NO-seleccionado");
    $("#botonBLOG").addClass("SI-seleccionado");

    $("#botonTODOS").removeClass("SI-seleccionado");
    $("#botonNOTAS").removeClass("SI-seleccionado");
    $("#botonFOTO").removeClass("SI-seleccionado");
    $("#botonCURIOSIDADES").removeClass("SI-seleccionado");
    $("#botonLECTOR").removeClass("SI-seleccionado");

    $("#botonTODOS").addClass("NO-seleccionado");
    $("#botonNOTAS").addClass("NO-seleccionado");
    $("#botonFOTO").addClass("NO-seleccionado");
    $("#botonCURIOSIDADES").addClass("NO-seleccionado");
    $("#botonLECTOR").addClass("NO-seleccionado");
  });






  $("#botonCURIOSIDADES").click(function() { /*Boton scrolldown*/
    $(".artLECTOR").hide();
    $(".artNOTAS").hide();
    $(".artFOTO").hide();
    $(".artBLOG").hide();

    $(".artCURIOSIDADES").show();



    $("#botonCURIOSIDADES").removeClass("NO-seleccionado");
    $("#botonCURIOSIDADES").addClass("SI-seleccionado");

    $("#botonTODOS").removeClass("SI-seleccionado");
    $("#botonNOTAS").removeClass("SI-seleccionado");
    $("#botonFOTO").removeClass("SI-seleccionado");
    $("#botonBLOG").removeClass("SI-seleccionado");
    $("#botonLECTOR").removeClass("SI-seleccionado");

    $("#botonTODOS").addClass("NO-seleccionado");
    $("#botonNOTAS").addClass("NO-seleccionado");
    $("#botonFOTO").addClass("NO-seleccionado");
    $("#botonBLOG").addClass("NO-seleccionado");
    $("#botonLECTOR").addClass("NO-seleccionado");
  });






  $("#botonLECTOR").click(function() { /*Boton scrolldown*/
    $(".artCURIOSIDADES").hide();
    $(".artNOTAS").hide();
    $(".artFOTO").hide();
    $(".artBLOG").hide();

    $(".artLECTOR").show();



    $("#botonLECTOR").removeClass("NO-seleccionado");
    $("#botonLECTOR").addClass("SI-seleccionado");

    $("#botonTODOS").removeClass("SI-seleccionado");
    $("#botonNOTAS").removeClass("SI-seleccionado");
    $("#botonFOTO").removeClass("SI-seleccionado");
    $("#botonCURIOSIDADES").removeClass("SI-seleccionado");
    $("#botonBLOG").removeClass("SI-seleccionado");

    $("#botonTODOS").addClass("NO-seleccionado");
    $("#botonNOTAS").addClass("NO-seleccionado");
    $("#botonFOTO").addClass("NO-seleccionado");
    $("#botonCURIOSIDADES").addClass("NO-seleccionado");
    $("#botonBLOG").addClass("NO-seleccionado");
  });
});
