import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

export default function ChangeAppName() {
  const appContext = useContext(AppContext);
  return (
    <div>
      <button
        onClick={() => {
          appContext.setAppName("New Todo App");
        }}
      >
        Change App Name
      </button>
    </div>
  );
}
