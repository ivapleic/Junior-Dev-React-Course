import "../styles/Filter.css";

function Filter({ selectedFilter1, setSelectedFilter1,selectedFilter2, setSelectedFilter2 }: any) {

  const handleFilterClick1 = (event: any) => {
    setSelectedFilter1(event.target.value);
  };

  function resetFilter1() {
    setSelectedFilter1(undefined);
  }

  const handleFilterClick2 = (event: any) => {
    setSelectedFilter2(event.target.value);
  };

  function resetFilter2() {
    setSelectedFilter2(undefined);
  }

  return (
    <div className="filters"> 
    <div className="filter first-filter">
      <p>Vrsta:</p>

      <label>
        <input
          type="radio"
          value="Hlače"
          checked={selectedFilter1 === "Hlače"}
          onChange={handleFilterClick1}
        />
        Hlače
      </label>
      <label>
        <input
          type="radio"
          value="Majica"
          checked={selectedFilter1 === "Majica"}
          onChange={handleFilterClick1}
        />
        Majica
      </label>

      <label>
        <input
          type="radio"
          value="Kosulja"
          checked={selectedFilter1 === "Kosulja"}
          onChange={handleFilterClick1}
        />
        Košulja
      </label>

      <label>
        <input
          type="radio"
          value="Haljina"
          checked={selectedFilter1 === "Haljina"}
          onChange={handleFilterClick1}
        />
        Haljina
      </label>

      <label>
        <input
          type="radio"
          value="Suknja"
          checked={selectedFilter1 === "Suknja"}
          onChange={handleFilterClick1}
        />
        Suknja
      </label>
      <br></br>
      <button
        className="reset"
        placeholder="reset filter"
        onClick={resetFilter1}
      >
        Reset Filter
      </button>
    </div>

    <div className="filter">
      <p>Veličina:</p>

      <label>
        <input
          type="radio"
          value="XS"
          checked={selectedFilter2 === "XS"}
          onChange={handleFilterClick2}
        />
        XS
      </label>
      <label>
        <input
          type="radio"
          value="S"
          checked={selectedFilter2 === "S"}
          onChange={handleFilterClick2}
        />
        S
      </label>

      <label>
        <input
          type="radio"
          value="M"
          checked={selectedFilter2 === "M"}
          onChange={handleFilterClick2}
        />
        M
      </label>

      <label>
        <input
          type="radio"
          value="L"
          checked={selectedFilter2 === "L"}
          onChange={handleFilterClick2}
        />
        L
      </label>

      <label>
        <input
          type="radio"
          value="XL"
          checked={selectedFilter2 === "XL"}
          onChange={handleFilterClick2}
        />
        XL
      </label>
      <br></br>
      <button
        className="reset"
        placeholder="reset filter"
        onClick={resetFilter2}
      > Reset Filter
      </button>
    </div>
    </div>
  );
}
export default Filter;
