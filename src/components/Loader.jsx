import React from "react";
import { helix } from "ldrs";

helix.register();

export const Loader = () => {
  const centerDivStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={centerDivStyle}>
      <l-helix size="100" speed="1.0" color="purple"></l-helix>
    </div>
  );
};
