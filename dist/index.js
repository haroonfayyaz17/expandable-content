import React from "react";
import "style.css";
const SeeMoreText = ({
  value = "",
  id,
  length = 40,
  className = "",
  seeMore,
  setSeeMore,
  onHoverEnabled = false
}) => {
  const suffix = id === seeMore ? " see less" : " see more...";
  if (!value) value = "";
  return /*#__PURE__*/React.createElement("span", {
    className: id === seeMore ? "see-more-text" : null
  }, value.slice(0, id === seeMore ? value.length : length), value.length > length && /*#__PURE__*/React.createElement("h6", {
    className: "ml-1 cursor-pointer d-inline " + className,
    style: {
      marginTop: "2px"
    },
    onMouseEnter: () => onHoverEnabled ? setSeeMore(seeMore === id ? "" : id) : null,
    onClick: () => setSeeMore(seeMore === id ? "" : id)
  }, suffix));
};
export default SeeMoreText;