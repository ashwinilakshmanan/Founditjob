import React from "react";
import close from "../components/images/icon-remove.svg";
import '../components/header.css';

function Header({ keywords, removeKeywords, clearAll }) {
  return (
    <>
      <div className="header-container">
        <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" key={id} onClick={() => removeKeywords(key)}>
                <img src={close} alt="" />
              </button>
            </li>
          );
        })}
        <a href="#" onClick={()=>{clearAll()}}>Clear</a>
        </ul>
      </div>
    </>
  );
}

export default Header;
