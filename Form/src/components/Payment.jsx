import "../styles/Payment.css";

const Placanje = ({ formik }) => {
  return (
    <div className="PaymentBox">
      <div className="paymentNatpis">Način plaćanja:</div>
      <form autoComplete="off" className="paymentBox">
        <input
          type="radio"
          id="choice1"
          name="choice"
          value="poduzece"
          onChange={formik.handleChange}
          checked={formik.values.choice === "poduzece"}
          className={
            formik.errors.choice && formik.touched.choice ? "input-error" : ""
          }
        >
          {formik.errors.choice && formik.touched.choice && (
            <p className="error">{formik.errors.choice}</p>
          )}
        </input>
        <label htmlFor="choice1">Poduzeće</label>
        <br></br>
        <input
          type="radio"
          id="choice2"
          name="choice"
          value="kartica"
          onChange={formik.handleChange}
          checked={formik.values.choice === "kartica"}
          className={
            formik.errors.choice && formik.touched.choice ? "input-error" : ""
          }
        >
          {formik.errors.choice && formik.touched.choice && (
            <p className="error">{formik.errors.choice}</p>
          )}
        </input>
        <label htmlFor="choice2">Kartica</label>
      </form>
    </div>
  );
};

export default Placanje;
