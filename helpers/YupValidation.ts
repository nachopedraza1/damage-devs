import * as yup from "yup";

const phoneNumberRegEx = /^[0-9]/;
/* const PasswordRegEx = /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/; */

export const YupValidation = yup.object().shape({
    name: yup
        .string()
        .min(4, "Ingresa 4 caracteres como mínimo.")
        .max(30, "30 caracteres como máximo.")
        .required("El nombre es requerido."),

    email: yup.string().email("Por favor, ingresa un email válido").required("El Email es requerido."),

    /*    password: yup
           .string()
           .required("Enter Your Password")
           .matches(PasswordRegEx, "Uppercase Lowercase Special char Required")
           .min(8, "Password Should be minimum 8 character")
           .max(50, "Too long"), */

    phoneNumber: yup
        .string()
        .matches(phoneNumberRegEx, "Número inválido")
        .min(7, "Número inválido")
        .max(11, "Número inválido")
        .required("El numero de teléfono es requerido."),

    /*     confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Password does not matched")
            .required("Confirm Password is Required"), */
});