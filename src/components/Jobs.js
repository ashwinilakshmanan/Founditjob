import React from "react";
import Job from "./Job";

function Jobs({ data, setKeywords }) {
  console.log(data);
  return (
    <>
      <u>List of jobs</u>
      <div className="jobs">
        {data.map((d) => {
          return <Job data={d} setKeywords={setKeywords} />;
        })}
      </div>
    </>
  );
}

export default Jobs;
