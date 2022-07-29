import React from "react";
import style from "./style.module.css";
import "./style.css";

// react native style
// const styles = {
//   heading: {
//     // css in js
//     backgroundColor: "red",
//     // css
//     // background-color: red;

//     // invalid css
//     // name: "arastun",
//   },
//   year: {
//     color: "rebeccapurple",
//     fontWeight: "bold",
//     fontSize: "3rem",
//   },
// };

// prefer using named export
// named export: export const Component
export const Person = ({ name, year, malikmammad, pepperPots }) => (
  <li>
    <h1 style={{ backgroundColor: "red" }}>{name}</h1>
    <span className={style._year}>{year}</span>
    <div>{malikmammad}</div>
    <div>{pepperPots}</div>
  </li>
);

// export const Person = ({ name, year }) => {
//     return (
//       <div>
//         <h1>{name}</h1>
//         <span>{year}</span>
//       </div>
//     );
//   };

// default export
// export default Person;

// named export
// export { Person };

// camelCase => props
// PascalCase => component name
