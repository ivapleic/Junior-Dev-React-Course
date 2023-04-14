import "./App.css";
import Contact from "./components/Contact";
import Address from "./components/Address";
import Payment from "./components/Payment";
import AgreeTerms from "./components/AgreeTerms";
import Order from "./components/Order";
import Bill from "./components/Bill";
import { useState } from "react";
import { useFormik } from "formik";
import { BasicSchema } from "./components/BasicSchema";

function App() {
  const [clicker, setCLick] = useState(0);

  const changeValue = (newValue) => {
    setCLick(newValue);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      address: "",
      state: "",
      choice: "",
      isApproved: false,
      termsAccepted: false,
      order: "",
    },
    validationSchema: BasicSchema,
  });

  console.log(formik);

  return (
    <>
      <div className="mainCard">
        <div className="info">
          <span className="racun">Račun &#8594;</span>{" "}
          <span className="placanje">Plaćanje</span>
        </div>
        <Contact formik={formik} />
        <Address formik={formik} />
        <Payment formik={formik} />
        <AgreeTerms formik={formik} />
        <Order changeValue={changeValue} formik={formik} />
      </div>
      <div>
      {formik.values.isApproved && <Bill formik={formik} />}
      </div>
    </>
  );
}

export default App;
