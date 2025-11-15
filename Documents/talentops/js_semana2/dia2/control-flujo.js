// Ejercicio: Crea una función que valide un formulario de registro usando diferentes estructuras de control. 
// Debe verificar: nombre no vacío, email válido, edad entre 18-99, y contraseña segura. 
// Usa try/catch para manejar errores y proporciona mensajes específicos para cada tipo de validación fallida.
function validarFormulario(form) {
    try {
        // Validar nombre
        if (!form.nombre || form.nombre.trim() === "") {
            throw new Error("El nombre no puede estar vacío");
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            throw new Error("El email no es válido");
        }

        // Validar edad
        if (typeof form.edad !== "number") {
            throw new Error("La edad debe ser un número");
        }

        if (form.edad < 18 || form.edad > 99) {
            throw new Error("La edad debe estar entre 18 y 99");
        }

        // Validar contraseña
        const passRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passRegex.test(form.password)) {
            throw new Error("La contraseña no es segura");
        }

        return "Formulario válido";
    } catch (error) {
        return error.message;
    }
}

// Pruebas
const correcto = {
    nombre: "Ana",
    email: "ana@example.com",
    edad: 20,
    password: "Clave123"
};

const incorrecto = {
    nombre: "",
    email: "correo malo",
    edad: 10,
    password: "abc"
};

console.log("Prueba correcta:");
console.log(validarFormulario(correcto));

console.log("Prueba incorrecta:");
console.log(validarFormulario(incorrecto));
