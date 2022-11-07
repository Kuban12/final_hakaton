import React from "react";
import Navbar from "../../components/HomePage/Navbar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "../../styles/catalogPage.css";

import { useWorkCreate } from "../../contexts/workCreateContext";
export const Navigate = () => useNavigate();
export const Location = () => useLocation();

const FilterCategory = () => {
  const { fetchByParams } = useWorkCreate();

  return (
    <>
      <Navbar />
      <div className="sidenav">
        <FormControl>
          {/* <FormLabel
            id="demo-controlled-radio-buttons-group"
            className="sidenav"
          >
            Все категории
          </FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            //custom
            defaultValue="all"
            onChange={(e) => {
              fetchByParams("type", e.target.value);
            }}
          >
            <FormControlLabel
              className="sidenav_btn"
              value="all"
              control={<Radio />}
              label="Все категории"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="makarons"
              control={<Radio />}
              label="Ремонт и строительство"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="eclairs"
              control={<Radio />}
              label="Ремонт и установка техники"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="giftbaskets"
              control={<Radio />}
              label="Ремонт авто"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="caramel"
              control={<Radio />}
              label="Красота"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="waffles"
              control={<Radio />}
              label="Перевозки и курьеры"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="chokpotato"
              control={<Radio />}
              label="Хозяйство и уборка"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="chokpotato"
              control={<Radio />}
              label="Компьютеры и IT"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="chokpotato"
              control={<Radio />}
              label="Дизайнеры"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="chokpotato"
              control={<Radio />}
              label="Аренда"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="chokpotato"
              control={<Radio />}
              label="Юристы"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="chokpotato"
              control={<Radio />}
              label="Фото, видео, аудио"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="chokpotato"
              control={<Radio />}
              label="Творчество, рукоделие и хобби"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="chokpotato"
              control={<Radio />}
              label="Организация мероприятий"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="chokpotato"
              control={<Radio />}
              label="Артисты"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default FilterCategory;
