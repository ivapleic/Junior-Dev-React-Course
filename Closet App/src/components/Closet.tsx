import "../styles/Closet.css";
import { useState } from "react";

function Closet({
  clothes,
  selectedFilter1,
  selectedFilter2,
  handleDelete,
  handleEdit,
}: any) {
  const [editingClothing, setEditingClothing] = useState({});

  const handleEditClick = (id: string) => {
    const item = clothes.find((c: any) => c.id === id);
    setEditingClothing({ ...item });
  };

  const handleSaveClick = (id: string) => {
    handleEdit(id, editingClothing);
    setEditingClothing(null);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setEditingClothing((prev) => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (event: any) => {
    const { value } = event.target;
    setEditingClothing((prev) => ({ ...prev, color: value }));
  };

  const filteredClothes = clothes.filter((c: any) => {
    if (selectedFilter1 && selectedFilter2) {
      return c.type === selectedFilter1 && c.size === selectedFilter2;
    } else if (selectedFilter1) {
      return c.type === selectedFilter1;
    } else if (selectedFilter2) {
      return c.size === selectedFilter2;
    } else {
      return true;
    }
  });

  return (
    <div className="closet">
      <div className="table-div">
        <table className="closet-table">
          <thead>
            <tr>
              <th>TYPE</th>
              <th>SIZE</th>
              <th>COLOR</th>
              <th>IMAGE</th>
              <th>DATE</th>
              <th>OPCIJE</th>
            </tr>
          </thead>
          <tbody>
            {filteredClothes
              .sort(
                (a: any, b: any) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((c: any) => (
                <tr key={c.id}>
                  <td>
                    {editingClothing?.id === c.id ? (
                      <input
                        type="text"
                        name="type"
                        value={editingClothing.type}
                        onChange={handleInputChange}
                      />
                    ) : (
                      c.type
                    )}
                  </td>
                  <td>
                    {editingClothing?.id === c.id ? (
                      <input
                        type="text"
                        name="size"
                        value={editingClothing.size}
                        onChange={handleInputChange}
                      />
                    ) : (
                      c.size
                    )}
                  </td>
                  <td>
                    {editingClothing?.id === c.id ? (
                      <input
                        type="color"
                        name="color"
                        value={editingClothing.color}
                        onChange={handleColorChange}
                      />
                    ) : (
                      <input type="color" value={c.color} disabled />
                    )}
                  </td>

                  <td>
                    <img src={c.image} alt="" />
                  </td>
                  <td>{c.date}</td>
                  <td>
                    {editingClothing?.id === c.id ? (
                      <button
                        className="options-button"
                        onClick={() => handleSaveClick(c.id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="options-button"
                        onClick={() => handleEditClick(c.id)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="options-button"
                      onClick={() => handleDelete(c.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Closet;
