import React from "react";
import { UilArrowDown } from "@iconscout/react-unicons";

function ScrollDown() {
  return (
    <div
      className="scroll-down-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "absolute",
        top: "275px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <UilArrowDown
        className="scroll-down-icon border rounded-full bg-white border-gray-500"
        style={{ fontSize: "2rem", color: "#000" }}
      />
    </div>
  );
}

export default ScrollDown;
