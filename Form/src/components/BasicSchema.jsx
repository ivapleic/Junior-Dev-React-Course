import * as yup from "yup";

export const BasicSchema = yup.object().shape({
  email: yup.string().email("Upišite valjani email").required(),
  name: yup
    .string()
    .min(2, "Ime se mora sastojati od barem 3 slova")
    .required("Required"),
  address: yup
    .string()
    .min(10, "Adresa mora imati barem 10 znakova")
    .required("Required"),
  choice: yup.string().required("Način plaćanja je obavezan"),
  termsAccepted: yup
  .boolean()
  .oneOf([true], "Morate prihvatiti uvjete korištenja")
  .required("Morate prihvatiti uvjete korištenja"), // Add checkbox validation
});
