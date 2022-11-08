import React, { useEffect, useState } from "react";
import Navbar from "../../components/HomePage/Navbar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "../../styles/catalogPage.css";

import { useWorkCreate } from "../../contexts/WorkCreateContext";
import { NavItem } from "react-bootstrap";
// export const Navigate = () => useNavigate();
// export const Location = () => useLocation();

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
            // onChange={(e) => {
            //   fetchByParams("type", e.target.value);
            // }}
            onChange={(e) => {
              fetchByParams("category", e.target.value);
            }}
          >
            <FormControlLabel
              className="sidenav_btn"
              value="2"
              control={<Radio />}
              label="Ремонт и строительство"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="3"
              control={<Radio />}
              label="Ремонт и установка техники"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="4"
              control={<Radio />}
              label="Ремонт авто"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="6"
              control={<Radio />}
              label="Красота"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="7"
              control={<Radio />}
              label="Перевозки и курьеры"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="8"
              control={<Radio />}
              label="Хозяйство и уборка"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="9"
              control={<Radio />}
              label="Компьютеры и IT"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="10"
              control={<Radio />}
              label="Дизайнеры"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="11"
              control={<Radio />}
              label="Аренда"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="12"
              control={<Radio />}
              label="Юристы"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="14"
              control={<Radio />}
              label="Фото, видео, аудио"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="15"
              control={<Radio />}
              label="Творчество, рукоделие и хобби"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="16"
              control={<Radio />}
              label="Организация мероприятий"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="17"
              control={<Radio />}
              label="Артисты"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="18"
              control={<Radio />}
              label="Охрана и детективы"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="19"
              control={<Radio />}
              label="Услуги для животных"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="20"
              control={<Radio />}
              label="Разное"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="5"
              control={<Radio />}
              label="Репетиторы и обучение"
            />
            <FormControlLabel
              className="sidenav_btn"
              value="13"
              control={<Radio />}
              label="Тренеры"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </>
  );
};

export default FilterCategory;
