import React, { useEffect, useState } from "react";

function Ans({ answer1, answer2, answer3, answer4 }) {
  return (
    <div className="card border-secondary mb-3">
      <button type="button" className="btn btn-warning mb-1 mt-1">
        {answer1}
      </button>
      <button type="button" className="btn btn-warning mb-1">
        {answer2}
      </button>
      <button type="button" className="btn btn-warning mb-1">
        {answer3}
      </button>
      <button type="button" className="btn btn-warning mb-1">
        {answer4}
      </button>
    </div>
  );
}

export default Ans;
