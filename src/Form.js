import React from "react";
export default function Form() {
  return (
    <div className="Form">
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="inputPassword6" className="col-form-label"></label>
        </div>
        <div className="col-auto">
          <input
            placeholder="Enter City"
            type="text"
            id="inputCity"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            {" "}
          </span>
        </div>
      </div>
      <button type="button" className="btn btn-danger" id="search-button">
        Search
      </button>
      <button
        type="button"
        className="btn btn-info"
        id="current-location-button"
      >
        📍{" "}
      </button>
    </div>
  );
}
