"use strick"

var formulario = document.getElementById("formulario_registro");
var nombre, correo, telefono, clave, confirmaClave;

ValidacionChange();

function valida() {
    $(".campos_vacio").remove();
    var nombre1, correo1, telefono1, clave1, confirmaClave1;
    nombre1 = document.getElementById("Reg_nombre").value;
    apellido1 = document.getElementById("Reg_Apellido").value;
    correo1 = document.getElementById("Reg_correo").value;
    telefono1 = document.getElementById("Reg_telefono").value;
    clave1 = document.getElementById("Reg_contraseña").value;
    confirmaClave1 = document.getElementById("Con_concontraseña").value;

    var exprecionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var exprecionClave = /^.{4,12}$/;
    var exprecionTele2 = /^\d{7,7}$/;

     if (nombre1 === "" || correo1 === "" || clave1 === "" || confirmaClave1 === "" || apellido1 == "") {
        $(".reg").after(`
        <div class="campos_vacio">
            <i class="fas fa-times-hexagon"></i> Complete todos los Campos Requeridos
        </div>
        `)
        return false;
    }
    else if(!isNaN(nombre1) || !isNaN(apellido1)){
        return false;
    }
    else if(!exprecionCorreo.test(correo1)){
        return false;
    }
    else if(!exprecionClave.test(clave1)){
        return false;
    }
    else if(clave1 != confirmaClave1){
        $(".reg").after(`
        <div class="campos_vacio">
            <i class="fas fa-times-hexagon"></i> Las Contraseñas son Diferentes
        </div>
        `)
        return false;
    }else if(!exprecionClave.test(clave1)){
        return false;
    }
    else if(telefono.length > 9 || telefono1.length < 9){
        return false;
    }
}



function ValidacionChange() {
    nombre = document.getElementById("Reg_nombre")
    apellido = document.getElementById("Reg_Apellido");
    correo = document.getElementById("Reg_correo")
    telefono = document.getElementById("Reg_telefono")
    clave = document.getElementById("Reg_contraseña")
    confirmaClave = document.getElementById("Con_concontraseña")

    nombre.addEventListener("change", function () {
        changeNombre = document.getElementById("Reg_nombre").value;
        $(".nombre").remove();
        $("#Reg_nombre").removeClass("control-error");
        var exprecionNombre = /^[a-zA-ZÀ-ÿ\s]{1,100000000000000000}$/;
        if (!exprecionNombre.test(changeNombre)) {
            $("#Reg_nombre").addClass("control-error");
            $("#Reg_nombre").after(`
                <p class="parrafo-error nombre"><i class="fas fa-times-hexagon"></i> Este Campo solo debe llevar Letras</p>
            `);
        }
    })
    apellido.addEventListener("change", function () {
        changeApellido = document.getElementById("Reg_Apellido").value;
        $(".apellido").remove();
        $("#Reg_Apellido").removeClass("control-error");
        var exprecionApe = /^[a-zA-ZÀ-ÿ\s]{1,100000000000000000}$/;
        if (!exprecionApe.test(changeApellido)) {
            $("#Reg_Apellido").addClass("control-error");
            $("#Reg_Apellido").after(`
                <p class="parrafo-error apellido"><i class="fas fa-times-hexagon"></i> Este Campo solo debe llevar Letras</p>
            `);
        }
    })

    correo.addEventListener("change", function () {
        changeCorreo = document.getElementById("Reg_correo").value;
        $(".correo").remove();
        $("#Reg_correo").removeClass("control-error");
        var exprecionCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!exprecionCorreo.test(changeCorreo)) {
            $("#Reg_correo").addClass("control-error");
            $("#Reg_correo").after(`
            <p class="parrafo-error correo"><i class="fas fa-times-hexagon"></i> Este Campo solo debe ser un Correo</p>
        `);
        }
    })

    telefono.addEventListener("change", function () {
        changeTele = document.getElementById("Reg_telefono").value;
        $(".tele").remove();
        $("#Reg_telefono").removeClass("control-error");
        if (changeTele.length > 9 || changeTele.length < 9) {
            $("#Reg_telefono").addClass("control-error");
            $("#Reg_telefono").after(`
            <p class="parrafo-error tele"><i class="fas fa-times-hexagon"></i> El telefono debe ser un numero y puede tener 7 o 9 digitos</p>
        `);
        }
    })

    clave.addEventListener("change", function () {
        changeClave = document.getElementById("Reg_contraseña").value;
        $(".clave").remove();
        $("#Reg_contraseña").removeClass("control-error");
        var exprecionClave = /^.{4,12}$/;
        if (!exprecionClave.test(changeClave)) {
            $("#Reg_contraseña").addClass("control-error");
            $("#Reg_contraseña").after(`
            <p class="parrafo-error clave"><i class="fas fa-times-hexagon"></i> La contraseña solo debe tener de 4 a 12 digitos</p>
        `);
            document.getElementById("Reg_contraseña").value = "";
        }
    })

    confirmaClave.addEventListener("change", function () {
        changeConClave = document.getElementById("Con_concontraseña").value;
        changeClave = document.getElementById("Reg_contraseña").value;
        $(".Cclave").remove();
        $("#Con_concontraseña").removeClass("control-error");
        if (changeConClave != changeClave) {
            console.log("object");
            $("#Con_concontraseña").addClass("control-error");
            $("#Con_concontraseña").after(`
            <p class="parrafo-error Cclave"><i class="fas fa-times-hexagon"></i> Las Contraseñas no coinciden</p>
        `);
        }
    })
}