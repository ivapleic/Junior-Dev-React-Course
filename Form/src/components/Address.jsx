import "../styles/Address.css";
import { useFormik } from "formik";

const Address = ({ formik }) => {
  //  console.log(formik);
  return (
    <>
      <div className="AddressBox">
        <p className="heading">Adresa :</p>
        <form
          onSubmit={formik.handleSubmit}
          autoComplete="off"
          className="addressBox" >
          <label htmlFor="name">Ime:</label>
          <input
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="name"
            id="name"
            name="name"
            placeholder="Enter your name"
            className={
              formik.errors.name && formik.touched.name ? "input-error" : ""
            }
          ></input>
          {formik.errors.name && formik.touched.name && (
            <p className="error">{formik.errors.name}</p>
          )}

          <br></br>
          <label htmlFor="state">Država:</label>
          <select
            value={formik.values.state}
            onChange={formik.handleChange}
            label="state"
            id="state"
            name="state"
            placeholder="Select state"
          >
            <option value=""></option>
            <option value="Hrvatska">Hrvatska</option>
            <option value="Mađarska">Mađarska</option>
            <option value="Srbija">Srbija</option>
            <option value="Slovenija">Slovenija</option>
            <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
          </select>
          <br></br>
          <label htmlFor="address">Adresa:</label>
          <input
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="address"
            id="address"
            name="address"
            placeholder="Enter your address"
            className={
              formik.errors.address && formik.touched.address
                ? "input-error"
                : ""
            }
          ></input>
          {formik.errors.address && formik.touched.address && (
            <p className="error">{formik.errors.address}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default Address;
