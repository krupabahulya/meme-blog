import React from "react";

const Sidenavbar = () => {

  return (
        <div>
     <div className="form-group container">
     <div className="d-flex p-2">
     <div className="justify-content-start align-self-center">
      <label for="exampleSelect1" className="form-label mt-4"><h4 >Meme Categories:</h4></label>
      </div>
      <div className="p-2">
      </div>
      <div className="align-self-center">
      <select className="form-select" id="exampleSelect1">
        <option>all</option>
        <option>latest</option>
        <option>classics</option>
        <option>animals</option>
        <option>crypto</option>
        <option>cooking</option>
        <option>relationship</option>
      </select>
      </div>
    </div>
    </div>
 </div>

   )};

export default Sidenavbar;
