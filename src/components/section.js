import React, { useContext } from "react";
import { context } from "../context/context.js";
import "./styles2.css";

export default function Section({ children }) {
  console.log("section");
  let value = useContext(context);
  return (
    <section>
      <context.Provider value={value + 1}>{children}</context.Provider>
    </section>
  );
}
