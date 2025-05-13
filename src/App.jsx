import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./component/Loading";
import RecipeList from "./component/RecipeList";

function App() {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searched, setSeared] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSeared(true);
    let off = Math.floor(Math.random() * 10);
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${search}&offset=${off}&number=12`;
    console.log(url);
    setLoading(true);
    getData(url);
  }

  async function getData(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <head>
        <title>Recipe Finder!!</title>
      </head>
      <main>
        <article className="title">
          <h1>Recipe Finder!</h1>
        </article>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search here..."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {searched == false ? null : loading ? (
          <Loading />
        ) : (
          <RecipeList recipes={data.results} />
        )}
      </main>
    </>
  );
}

export default App;
