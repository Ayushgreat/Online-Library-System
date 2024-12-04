import React from "react";

// ------------------------ Button component Getting dynamic value as a props ------------------------
const Btn = ({ style, content, action }) => {
  return (
    <button className={style} onClick={action}>
      {content}
    </button>
  );
};

export default Btn;
