"use strict";
"use strick";

var formulario = document.getElementById("formulario_registro");
var nombre, correo, telefono, clave, confirmaClave;
nombre = document.getElementById("Reg_nombre");
correo = document.getElementById("Reg_correo");
telefono = document.getElementById("Reg_telefono");
clave = document.getElementById("Reg_contraseña");
confirmaClave = document.getElementById("Con_concontraseña");
nombre.addEventListener("change", function () {
  changeNombre = document.getElementById("Reg_nombre").value;
  $(".nombre").remove();
  $("#Reg_nombre").removeClass("control-error");
  var exprecionNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  if (!exprecionNombre.test(changeNombre)) {
    $("#Reg_nombre").addClass("control-error");
    $("#Reg_nombre").after("\n                <p class=\"parrafo-error nombre\"><i class=\"fas fa-times-hexagon\"></i> Este Campo solo debe llevar Letras</p>\n            ");
  }
});
correo.addEventListener("change", function () {
  changeCorreo = document.getElementById("Reg_correo").value;
  $(".correo").remove();
  $("#Reg_correo").removeClass("control-error");
  var exprecionNombre = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if (!exprecionNombre.test(changeCorreo)) {
    $("#Reg_correo").addClass("control-error");
    $("#Reg_correo").after("\n            <p class=\"parrafo-error correo\"><i class=\"fas fa-times-hexagon\"></i> Este Campo solo debe ser un Correo</p>\n        ");
  }
});
telefono.addEventListener("change", function () {
  changeTele = document.getElementById("Reg_telefono").value;
  $(".tele").remove();
  $("#Reg_telefono").removeClass("control-error");
  var exprecionTele1 = /^\d{9,9}$/;
  var exprecionTele2 = /^\d{7,7}$/;

  if (!exprecionTele1.test(changeTele) && !exprecionTele2.test(changeTele) && isNaN(changeTele)) {
    $("#Reg_telefono").addClass("control-error");
    $("#Reg_telefono").after("\n            <p class=\"parrafo-error tele\"><i class=\"fas fa-times-hexagon\"></i> El telefono debe ser un numero y puede tener 7 o 9 digitos</p>\n        ");
  }
});
clave.addEventListener("change", function () {
  changeClave = document.getElementById("Reg_contraseña").value;
  $(".clave").remove();
  $("#Reg_contraseña").removeClass("control-error");
  var exprecionClave = /^.{4,12}$/;

  if (!exprecionClave.test(changeClave)) {
    $("#Reg_contraseña").addClass("control-error");
    $("#Reg_contraseña").after("\n            <p class=\"parrafo-error clave\"><i class=\"fas fa-times-hexagon\"></i> La contrase\xF1a solo debe tener de 4 a 12 digitos</p>\n        ");
    document.getElementById("Reg_contraseña").value = "";
  }
});
confirmaClave.addEventListener("change", function () {
  changeConClave = document.getElementById("Con_concontraseña").value;
  changeClave = document.getElementById("Reg_contraseña").value;
  $(".Cclave").remove();
  $("#Con_concontraseña").removeClass("control-error");

  if (changeConClave == changeClave) {
    console.log("object");
    $("#Con_concontraseña").addClass("control-error");
    $("#Con_concontraseña").after("\n            <p class=\"parrafo-error Cclave\"><i class=\"fas fa-times-hexagon\"></i> Las Contrase\xF1as no coinciden</p>\n        ");
  }
});