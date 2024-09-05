import React, { useState } from 'react';

const CustomButton = ({ onClick, children }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick} // Add the onClick prop here
      style={{
        width: "145px",
        height: "49px",
        padding: "10px 24px",
        gap: "10px",
        fontSize: "16.5px",
        fontWeight: "200",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', sans-serif",
        borderRadius: "16px",
        border: "1px solid #161616",
        boxShadow: hover ? "rgba(0, 0, 0, 0.3) 15px 15px 15px 5px, rgba(0, 0, 0, 0.3) 20px 20px 25px 10px, rgba(0, 0, 0, 0.5) 15px 15px 30px 0px" : "",
        backgroundColor: hover ? "#28292F" : "#161616",
        color: hover ? "#FFFFFF" : "#A3ADB2",
        transition: "color 0.4s ease, backgroundColor 0.3s ease",
        
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
};

export default CustomButton;
