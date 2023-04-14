import "../styles/Contact.css";

const Contact = ({ formik }) => {
  console.log(formik.errors);

  return (
    <div className="contactBox">
      <p className="heading">Kontakt :</p>
      <form
        onSubmit={formik.handleSubmit}
        autoComplete="off"
        className="emailBox"
      >
        <label htmlFor="email">Email:</label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className={
            formik.errors.email && formik.touched.email ? "input-error" : ""
          }
        ></input>
        {formik.errors.email && formik.touched.email && (
          <p className="error">{formik.errors.email}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
