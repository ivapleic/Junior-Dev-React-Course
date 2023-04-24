import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import AddNew from "./components/AddNew";
import Filter from "./components/Filter";
import Closet from "./components/Closet";

function App() {
  const [clothes, setClothes] = useState([]);
  const [selectedFilter1, setSelectedFilter1] = useState();
  const [selectedFilter2, setSelectedFilter2] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/clothes").then((res) => {
      setClothes(res.data);
    });
  }, []);

  const handleDelete = (id: any) => {
    axios.delete(`http://localhost:3001/clothes/${id}`).then(() => {
      setClothes(clothes.filter((c) => c.id !== id));
    });
  };

  const handleEdit = (id:any, updatedClothing:any) => {
    axios
      .put(`http://localhost:3001/clothes/${id}`, updatedClothing)
      .then(() => {
        const index = clothes.findIndex((c) => c.id === id);
        const updatedClothes = [
          ...clothes.slice(0, index),
          updatedClothing,
          ...clothes.slice(index + 1),
        ];
        setClothes(updatedClothes);
        axios.put(`http://localhost:3001/clothes/${id}`, updatedClothing);
      });
  };

  return (
    <div className="app">
       <div className="heading">
          <p>MOJA GARDEROBA</p> 
      </div> 
      <div className="add-closet-filter">
        <AddNew setClothes={setClothes} />
        <div className="closet-filter">
          <Filter
            selectedFilter1={selectedFilter1}
            setSelectedFilter1={setSelectedFilter1}
            selectedFilter2={selectedFilter2}
            setSelectedFilter2={setSelectedFilter2}
          />
          <Closet
            clothes={clothes}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            selectedFilter1={selectedFilter1}
            selectedFilter2={selectedFilter2}
          />
        </div>
      </div> 
    </div>
  );
}

export default App;
