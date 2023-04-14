import "../styles/Order.css";

const Order = ({ changeValue, formik }) => {
  const ClickHandler = () => {
    if (!formik.values.termsAccepted) {
      alert('Morate prihvatiti uvjete korištenja');
    } 
    else {
      formik.setFieldValue('isApproved', true);
      changeValue(1);
    }
  };

  return (
    <div className="potvrdaBox">
      <button
        id="submitButton"
        type="submit"
        value={formik.order}
        onClick={ClickHandler} >
        Naruči
      </button>
    </div>
  );
};


export default Order;
