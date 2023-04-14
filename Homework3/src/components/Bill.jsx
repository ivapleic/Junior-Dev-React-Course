import "../styles/Bill.css";

function Bill({ formik }) {
  const Choice = () => {
    if (formik.values.choice === "poduzece") return "Poduzeće";
    else if (formik.values.choice === "kartica") return "Kartica";
    else return "";
  };
  return (
    <div className="DataBox">
      <label>VAŠ RAČUN</label>
      <div className="racun">
        <p className="emailRacun">Email: {formik.values.email}</p>
        <p className="imeRacun">Ime: {formik.values.name}</p>
        <p className="drzavaRacun">Država: {formik.values.state}</p>
        <p className="adresaRacun">Adresa: {formik.values.address}</p>
        <p className="placanjeRacun">Način plaćanja: {Choice()}</p>
      </div>
    </div>
  );
}

export default Bill;
