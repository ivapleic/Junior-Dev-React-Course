import "../styles/AgreeTerms.css";

const AgreeTerms = ({ formik }) => {
  return (
    <div className="checkboxBox">
      <input
        type="checkbox"
        id="termsAccepted"
        name="termsAccepted"
        value="approved"
        checked={formik.values.termsAccepted}
        onChange={formik.handleChange}
      />
      <label htmlFor="termsAccepted">Prihvaćam uvjete</label>
    </div>
  );
};


export default AgreeTerms;
