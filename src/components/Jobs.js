import React, { useState } from "react";
import Job from "./Job";
import { useEffect } from "react";
import '../components/job.css'

function Jobs({ data, setKeywords, keywords }) {
  console.log(data);

  const [filteredData, setFilteredData] = useState([]);
  console.log("filteredData",filteredData);
  const modifiedData = () => {
    
    if (keywords.length > 0) {
      const newData = filteredData.filter((d) => {
        return keywords.every((key) => {
          return (
            d.role == key ||
            d.level == key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setFilteredData(newData);
      console.log("newFdata",filteredData);
    } else {
      setFilteredData(data);
    }
  };

  useEffect(()=>{
    modifiedData();
  },[keywords])
  return (
    <>
      
      <div className="jobs-container">
        {filteredData.map((d) => {
          return <Job key ={d.id} data={d} setKeywords={setKeywords} />;
        })}
      </div>
    </>
  );
}

export default Jobs;
