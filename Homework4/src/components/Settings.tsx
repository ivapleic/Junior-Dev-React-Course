import { useState, useEffect } from "react";
import "../styles/Settings.css";

function Settings(props:any) {
  
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(props.selectedCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState(props.selectedDifficulty);
  const [numQuestions, setNumQuestions] = useState(props.numQuestions);

  function getCategories() {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => {
        const categories = data.trivia_categories;
        setCategories(categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategoryChange = (event:any) => {
    setSelectedCategory(event.target.value);
  };

  const handleDifficultyChange = (event:any) => {
    setSelectedDifficulty(event.target.value);
  };

  const handleNumQuestionsChange = (event:any) => {
    setNumQuestions(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    props.onStartQuiz(selectedCategory, selectedDifficulty, numQuestions);
  };

  return (
    <div className="settings">
      <div className="form-heading">
        <h1>Welcome to the Quiz App</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="selecting">
            <label className="label-settings">Category:</label>
            <br />
            <select
              className="select-settings"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Choose a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="selecting">
            <label className="label-settings">Difficulty:</label>
            <br />
            <select
              className="select-settings"
              value={selectedDifficulty}
              onChange={handleDifficultyChange}
            >
              <option value="">Choose a level</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="selecting">
            <label className="label-settings">Number of Questions:</label>
            <br />
            <select
              className="select-settings"
              value={numQuestions}
              onChange={handleNumQuestionsChange}
            >
              <option value="">Choose a number</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="selecting">
            <button className="start-button" type="submit">
              Start
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
