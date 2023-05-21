import React from "react";

const Button = ({ styles, href, text, type }) => (
  <button
    type={type}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} rounded-[10px]`}
  >
    <a href={href}>{text}</a>
  </button>
);

export default Button;
