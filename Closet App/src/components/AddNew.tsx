import "../styles/AddNew.css";
import { useState, useEffect } from "react";
import axios from "axios";

function AddNew({ setClothes }:any) {
  const [formData, setFormData] = useState({
    type: "",
    size: "",
    color: "",
    image: "",
    date: "",
  });
  const [types, setTypes] = useState([]);
  const [sizes, setSizes] = useState([]);

  function obradiPodatke(object: any) {
    return {
      type: object.type,
      size: object.size,
      color: object.color,
      image: object.image,
      date: object.date,
    };
  }

  const sendData = (event: any) => {
    event.preventDefault();
    console.log(formData);

    const toSend = obradiPodatke(formData);

    axios.post("http://localhost:3001/clothes", toSend).then((rez) => {
      setClothes((stanje: any) => [...stanje, rez.data]);
    });
  };

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/types"),
      axios.get("http://localhost:3001/sizes"),
    ])
      .then(([resTypes, resSizes]) => {
        setTypes(resTypes.data);
        setSizes(resSizes.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  function ChangeInput(event: any) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="add-new">
      <div className="dodaj-novo">
        <p>Dodaj novo:</p>
      </div>
      <form onSubmit={sendData}>
        <div className="type-color">
          <div className="type">
            <label>
              <p>Type:</p>
              <select
                name="type"
                value={formData.type}
                onChange={ChangeInput}
                required
              >
                <option value="">---- choose a type ----</option>
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="color">
            <label>
              <p>Color:</p>
              <input
                type="color"
                name="color"
                value={formData.color}
                onChange={ChangeInput}
                required
              />
            </label>
          </div>
        </div>

        <div className="size-date">
          <div className="size">
            <label>
              <p>Size:</p>
              <select
                name="size"
                value={formData.size}
                onChange={ChangeInput}
                required
              >
                <option value="">---- choose a size ----</option>
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="date">
            <label>
              <p>Date:</p>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={ChangeInput}
                required
              />
            </label>
          </div>
        </div>
        <div className="image">
          <label>
            <p>Image:</p>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={ChangeInput}
              placeholder="---- insert url ----"
              required
            />
          </label>
        </div>
        <div className="save-btn">
          <button type="submit">&#x2713; Spremi</button>
        </div>
      </form>
    </div>
  );
}
export default AddNew;
