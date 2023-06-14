import "./App.css";
import data from "../src/data.json";
import Jobs from "./components/Jobs";
import { useState } from "react";
import Header from "../src/components/Header";

function App() {
  const [filterKeywords, setFilterKeywords] = useState([]);

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteFilterKeyword = (data) => {
    const newKeyword = filterKeywords.filter((key) => key != data);
    setFilterKeywords(newKeyword);
  };

  const clearAll = () => {
    setFilterKeywords([]);
  };
  return (
    <>
      <div>
        <div className="header"></div>
        {filterKeywords.length > 0 && (
          <Header
            keywords={filterKeywords}
            removeKeywords={deleteFilterKeyword}
            clearAll={clearAll}
          />
        )}
        <Jobs data={data} setKeywords={addFilterKeywords} keywords ={filterKeywords} />
      </div>
    </>
  );
}

export default App;
