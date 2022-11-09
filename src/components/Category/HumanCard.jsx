// import React from "react";
// import { useWorkCreate } from "../../contexts/WorkCreateContext";
// import "../../styles/card.css";
// import { useFav } from "../../contexts/FavoritesContext";
// import Rating from "@mui/material/Rating";
// import Box from "@mui/material/Box";
// import StarIcon from "@mui/icons-material/Star";
// import { useState } from "react";

// const labels = {
//   0.5: "0.5",
//   1: "1",
//   1.5: "1.5",
//   2: "2",
//   2.5: "2.5",
//   3: "3",
//   3.5: "3.5",
//   4: "4",
//   4.5: "4.5",
//   5: "5",
// };

// function getLabelText(value) {
//   return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
// }

// const HumanCard = ({ item }) => {
//   const [value, setValue] = React.useState(2);
//   const [hover, setHover] = React.useState(-1);
//   const { addProductToFavorite } = useFav();
//   return (
//     <div>
//       <div
//         className="blog-card spring-fever"
//         style={{
//           backgroundImage: `url(${item.image})`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         <div className="title-content">
//           <h3>{item.name}</h3>
//           <hr />
//           {/* <div className="intro">КАТЕГОРИЯ: {item.category}</div> */}
//           <div className="intro">ОПЫТ: {item.experience}</div>
//         </div>
//         <div className="card-info">{item.desc}</div>
//         <div className="utility-info">
//           <ul className="utility-list">
//             <li className="price">Price: {item.price} com</li>
//             <li className="phone">Phone: {item.phone_number}</li>
//             <br />
//             <li className="phone">С: {item.hour_from} :00 </li>
//             <li className="phone">До: {item.hour_to} :00</li>
//           </ul>
//           <button onClick={() => addProductToFavorite(item)}>fav</button>
//           <Box
//             sx={{
//               width: 200,
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <Rating
//               name="hover-feedback"
//               value={value}
//               precision={0.5}
//               getLabelText={getLabelText}
//               onChange={(event, newValue) => {
//                 setValue(newValue);
//               }}
//               onChangeActive={(event, newHover) => {
//                 setHover(newHover);
//               }}
//               emptyIcon={
//                 <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
//               }
//             />
//             {value !== null && (
//               <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
//             )}
//           </Box>
//         </div>
//         <div className="gradient-overlay"></div>
//         <div className="color-overlay"></div>
//       </div>
//     </div>
//   );
// };

// export default HumanCard;

import React from "react";
import { useWorkCreate } from "../../contexts/WorkCreateContext";
import "../../styles/card.css";
import { useFav } from "../../contexts/FavoritesContext";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const HumanCard = ({ item }) => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const { addProductToFavorite } = useFav();

  return (
    <div>
      <div
        className="blog-card spring-fever"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="title-content">
          <h3>{item.name}</h3>
          <hr />
          {/* <div className="intro">КАТЕГОРИЯ: {item.category}</div> */}
          <div className="intro">ОПЫТ: {item.experience} лет</div>
        </div>
        <div className="card-info">{item.desc}</div>
        <div className="utility-info">
          <ul className="utility-list">
            <li className="price">Цена: {item.price} coм</li>
            <li className="phone">Тел: {item.phone_number}</li>
            <br />
            <li className="phone">С: {item.hour_from} : 00 </li>
            <li className="phone">До: {item.hour_to} : 00</li>
          </ul>
          <button onClick={() => addProductToFavorite(item)}>fav</button>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
        </div>
        <div className="gradient-overlay"></div>
        <div className="color-overlay"></div>
      </div>
    </div>
  );
};

export default HumanCard;
