import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./constants/mock";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const menuHeader = "Menu";
const reviewsHeader = "Reviews";

root.render(
  <div>
    <div>
      <span>{restaurants[0].name}</span>
      <h3>{menuHeader}</h3>
      <ul>
        <li>{restaurants[0].menu[0].name}</li>
        <li>{restaurants[0].menu[1].name}</li>
        <li>{restaurants[0].menu[2].name}</li>
      </ul>
      <h3>{reviewsHeader}</h3>
      <ul>
        <li>{restaurants[0].reviews[0].text}</li>
        <li>{restaurants[0].reviews[1].text}</li>
      </ul>
    </div>

    <div>
      <span>{restaurants[1].name}</span>
      <h3>{menuHeader}</h3>
      <ul>
        <li>{restaurants[1].menu[0].name}</li>
        <li>{restaurants[1].menu[1].name}</li>
      </ul>
      <h3>{reviewsHeader}</h3>
      <ul>
        <li>{restaurants[1].reviews[0].text}</li>
        <li>{restaurants[1].reviews[1].text}</li>
        <li>{restaurants[1].reviews[2].text}</li>
      </ul>
    </div>

    <div>
      <span>{restaurants[2].name}</span>
      <h3>{menuHeader}</h3>
      <ul>
        <li>{restaurants[2].menu[0].name}</li>
        <li>{restaurants[2].menu[1].name}</li>
        <li>{restaurants[2].menu[2].name}</li>
      </ul>
      <h3>{reviewsHeader}</h3>
      <ul>
        <li>{restaurants[2].reviews[0].text}</li>
      </ul>
    </div>

    <div>
      <span>{restaurants[3].name}</span>
      <h3>{menuHeader}</h3>
      <ul>
        <li>{restaurants[3].menu[0].name}</li>
        <li>{restaurants[3].menu[1].name}</li>
      </ul>
      <h3>{reviewsHeader}</h3>
      <ul>
        <li>{restaurants[3].reviews[0].text}</li>
        <li>{restaurants[3].reviews[1].text}</li>
      </ul>
    </div>
  </div>
);

//root.render(
// React.createElement("div", {
//   children: [
//     React.createElement("div", {
//       children: [
//         React.createElement("span", { children: restaurants[0].name }),
//         React.createElement("h3", { children: menuHeader }),
//         React.createElement("ul", {
//           children: [
//             React.createElement("li", {
//               children: restaurants[0].menu[0].name,
//             }),
//             React.createElement("li", {
//               children: restaurants[0].menu[1].name,
//             }),
//             React.createElement("li", {
//               children: restaurants[0].menu[2].name,
//             }),
//           ],
//         }),
//         React.createElement("h3", { children: reviewsHeader }),
//         React.createElement("ul", {
//           children: [
//             React.createElement("li", {
//               children: restaurants[0].reviews[0].text,
//             }),
//             React.createElement("li", {
//               children: restaurants[0].reviews[1].text,
//             }),
//           ],
//         }),
//       ],
//     }),

//     React.createElement("div", {
//       children: [
//         React.createElement("span", { children: restaurants[1].name }),
//         React.createElement("h3", { children: menuHeader }),
//         React.createElement("ul", {
//           children: [
//             React.createElement("li", {
//               children: restaurants[1].menu[0].name,
//             }),
//             React.createElement("li", {
//               children: restaurants[1].menu[1].name,
//             }),
//           ],
//         }),
//         React.createElement("h3", { children: reviewsHeader }),
//         React.createElement("ul", {
//           children: [
//             React.createElement("li", {
//               children: restaurants[1].reviews[0].text,
//             }),
//             React.createElement("li", {
//               children: restaurants[1].reviews[1].text,
//             }),
//             React.createElement("li", {
//               children: restaurants[1].reviews[2].text,
//             }),
//           ],
//         }),
//       ],
//     }),

//     React.createElement("div", {
//       children: [
//         React.createElement("span", { children: restaurants[2].name }),
//         React.createElement("h3", { children: menuHeader }),
//         React.createElement("ul", {
//           children: [
//             React.createElement("li", {
//               children: restaurants[2].menu[0].name,
//             }),
//             React.createElement("li", {
//               children: restaurants[2].menu[1].name,
//             }),
//             React.createElement("li", {
//               children: restaurants[2].menu[2].name,
//             }),
//           ],
//         }),
//         React.createElement("h3", { children: reviewsHeader }),
//         React.createElement("ul", {
//           children: [
//             React.createElement("li", {
//               children: restaurants[2].reviews[0].text,
//             }),
//           ],
//         }),
//       ],
//     }),

//     React.createElement("div", {
//       children: [
//         React.createElement("span", { children: restaurants[3].name }),
//         React.createElement("h3", { children: menuHeader }),
//         React.createElement("ul", {
//           children: [
//             React.createElement("li", {
//               children: restaurants[3].menu[0].name,
//             }),
//             React.createElement("li", {
//               children: restaurants[3].menu[1].name,
//             }),
//           ],
//         }),
//         React.createElement("h3", { children: reviewsHeader }),
//         React.createElement("ul", {
//           children: [
//             React.createElement("li", {
//               children: restaurants[3].reviews[0].text,
//             }),
//             React.createElement("li", {
//               children: restaurants[3].reviews[1].text,
//             }),
//           ],
//         }),
//       ],
//     }),
//   ],
// })
//);
