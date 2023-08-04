import React, { useContext } from "react";
import { context } from "../context/context.js";
import "./styles2.css";

export default function Heading({ children }) {
  console.log("heading");
  let value = useContext(context);
  switch (value) {
    case 0:
      throw Error("Heading must be inside a section!");

    case 1:
      return <h1>{children}</h1>;

    case 2:
      return <h2>{children}</h2>;

    case 3:
      return <h3>{children}</h3>;

    case 4:
      return <h4>{children}</h4>;

    case 5:
      return <h5>{children}</h5>;

    case 6:
      return <h6>{children}</h6>;

    default:
      throw Error("level " + value + " unknown!");
  }
}
