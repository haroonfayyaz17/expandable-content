import React from "react";
import "style.css";

const SeeMoreText = ({
  value = "",
  id,
  length = 40,
  className = "",
  seeMore,
  setSeeMore,
  onHoverEnabled = false,
}) => {
  const suffix = id === seeMore ? " see less" : " see more...";
  if (!value) value = "";
  return (
    <span className={id === seeMore ? "see-more-text" : null}>
      {value.slice(0, id === seeMore ? value.length : length)}
      {value.length > length && (
        <h6
          className={"ml-1 cursor-pointer d-inline " + className}
          style={{ marginTop: "2px" }}
          onMouseEnter={() =>
            onHoverEnabled ? setSeeMore(seeMore === id ? "" : id) : null
          }
          onClick={() => setSeeMore(seeMore === id ? "" : id)}
        >
          {suffix}
        </h6>
      )}
    </span>
  );
};

export default SeeMoreText;
