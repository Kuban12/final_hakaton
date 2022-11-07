import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import TextField from "@mui/material/TextField";

import InputAdornment from "@mui/material/InputAdornment";

// custom imports
import { useNavigate } from "react-router-dom";
import { useWorkCreate } from "../contexts/workCreateContext";
import "../styles/becomeAWorker.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const BecomeAWorkerPage = () => {
  const { handleSaveWork, error1, setError1 } = useWorkCreate();
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  const name = "Kuban Kadyraliev";
  // category
  const [category, setCategory] = useState(0);
  // for experiance
  const [experiance, setExperiance] = useState("");

  const handleChangeExper = (event) => {
    setExperiance(event.target.value);
  };

  //   for working hours

  const [hour1, setHour1] = React.useState("");
  const handleChangeHour1 = (event) => {
    setHour1(event.target.value);
  };
  const [hour2, setHour2] = React.useState("");
  const handleChangeHour2 = (event) => {
    setHour2(event.target.value);
  };

  // description
  const [desc, setDesc] = useState("");

  //   for price
  const [price, setPrice] = React.useState(0);

  // custom
  function handleSave() {
    // if (
    //   category == "" ||
    //   experiance == ""
    //   // days == [] ||
    //   // hour1 == "" ||
    //   // hour2 == "" ||
    //   // desc == "" ||
    //   // price == "" ||
    //   // image !== File
    // ) {
    //   alert("Где-то не заполнено");
    // } else {
    // console.log("HELLO");
    // let formData = new FormData();
    // formData.append("experiance", experiance);
    // formData.append("hour_from", hour1);
    // formData.append("hour_to", hour2);
    // formData.append("desc", desc);
    // formData.append("price", price);
    // formData.append("category", category);
    // console.log(formData);
    let formData = {
      experience: experiance,
      hour_from: hour1,
      hour_to: hour2,
      desc: desc,
      price: price,
      category: category,
    };
    handleSaveWork(formData, navigate);

    setCategory("");
    setExperiance("");
    setHour1("");
    setHour2("");
    setDesc("");
    setPrice("");
    // }
  }

  const handleConsole = () => {
    // console.log("name_LastName", name);
    console.log("Category", category);
    console.log("experiance", experiance);
    console.log("hour_from", hour1);
    console.log("hour_to", hour2);
    console.log("description", desc);
    console.log("price", price);
  };
  console.log(typeof category);
  return (
    <>
      <FormControl
        className="work_categoryes_main"
        style={{
          width: "100%",
        }}
      >
        <FormLabel
          className="work_categoryes_title"
          id="demo-radio-buttons-group-label"
        >
          Выберите категории услуг
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <div className="work_categories_radios">
            <FormControlLabel
              className="work_category_item"
              value="Ремонт и строительство"
              control={<Radio />}
              label="Ремонт и строительство"
              onClick={() => setCategory(2)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Ремонт и установка техники"
              control={<Radio />}
              label="Ремонт и установка техники"
              onClick={() => setCategory(3)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Ремонт авто"
              control={<Radio />}
              label="Ремонт авто"
              onClick={() => setCategory(4)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Репетиторы и обучение"
              control={<Radio />}
              label="Репетиторы и обучение"
              onClick={() => setCategory(5)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Красота"
              control={<Radio />}
              label="Красота"
              onClick={() => setCategory(6)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Перевозки и курьеры"
              control={<Radio />}
              label="Перевозки и курьеры"
              onClick={() => setCategory(7)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Хозяйство и уборка"
              control={<Radio />}
              label="Хозяйство и уборка"
              onClick={() => setCategory(8)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Компьютеры и IT"
              control={<Radio />}
              label="Компьютеры и IT"
              onClick={() => setCategory(9)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Дизайнеры"
              control={<Radio />}
              label="Дизайнеры"
              onClick={() => setCategory(10)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Аренда"
              control={<Radio />}
              label="Аренда"
              onClick={() => setCategory(11)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Юристы"
              control={<Radio />}
              label="Юристы"
              onClick={() => setCategory(12)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Тренеры"
              control={<Radio />}
              label="Тренеры"
              onClick={() => setCategory(13)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Фото, видео, аудио"
              control={<Radio />}
              label="Фото, видео, аудио"
              onClick={() => setCategory(14)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Творчество, рукоделие и хобби"
              control={<Radio />}
              label="Творчество, рукоделие и хобби"
              onClick={() => setCategory(15)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Организация мероприятий"
              control={<Radio />}
              label="Организация мероприятий"
              onClick={() => setCategory(16)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Артисты"
              control={<Radio />}
              label="Артисты"
              onClick={() => setCategory(17)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Охрана и детективы"
              control={<Radio />}
              label="Охрана и детективы"
              onClick={() => setCategory(18)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Услуги для животных"
              control={<Radio />}
              label="Услуги для животных"
              onClick={() => setCategory(19)}
            />
            <FormControlLabel
              className="work_category_item"
              value="Разное"
              control={<Radio />}
              label="Разное"
              onClick={() => setCategory(20)}
            />
          </div>
        </RadioGroup>
      </FormControl>
      {/* ////////////////////////////////////////////////////////////////////////////// experiance  */}
      <Box style={{ width: "50%", margin: "50px auto" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Опыт Работы</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={experiance}
            label="Опыт Работы"
            onChange={(handleChangeExper, (e) => setExperiance(e.target.value))}
          >
            <MenuItem value={"1 год"}>Один год</MenuItem>
            <MenuItem value={"2 года"}>Два года</MenuItem>
            <MenuItem value={"3 года"}>Три года</MenuItem>
            <MenuItem value={"4 года"}>Четыре года</MenuItem>
            <MenuItem value={"5 лет"}>Пять лет</MenuItem>
            <MenuItem value={"8 лет"}>Восемь лет</MenuItem>
            <MenuItem value={"10 лет"}>Десять лет</MenuItem>
            <MenuItem value={"15 лет"}>Пятнадцать лет</MenuItem>
            <MenuItem value={"20 лет"}>Двадцать лет</MenuItem>
            <MenuItem value={"25 лет"}>Двадцать пять лет</MenuItem>
            <MenuItem value={"30 лет"}>Тридцать лет</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* working hours */}
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "space-Around",
          margin: "10px auto",
        }}
      >
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">От</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={hour1}
              label="Опыт Работы"
              onChange={(handleChangeHour1, (e) => setHour1(e.target.value))}
            >
              <MenuItem value="1">1:00</MenuItem>
              <MenuItem value="2">2:00</MenuItem>
              <MenuItem value="3">3:00</MenuItem>
              <MenuItem value="4">4:00</MenuItem>
              <MenuItem value="5">5:00</MenuItem>
              <MenuItem value="6">6:00</MenuItem>
              <MenuItem value="7">7:00</MenuItem>
              <MenuItem value="8">8:00</MenuItem>
              <MenuItem value="9">9:00</MenuItem>
              <MenuItem value="10">10:00</MenuItem>
              <MenuItem value="11">11:00</MenuItem>
              <MenuItem value="12">12:00</MenuItem>
              <MenuItem value="13">13:00</MenuItem>
              <MenuItem value="14">14:00</MenuItem>
              <MenuItem value="15">15:00</MenuItem>
              <MenuItem value="16">16:00</MenuItem>
              <MenuItem value="17">17:00</MenuItem>
              <MenuItem value="18">18:00</MenuItem>
              <MenuItem value="19">19:00</MenuItem>
              <MenuItem value="20">20:00</MenuItem>
              <MenuItem value="21">21:00</MenuItem>
              <MenuItem value="22">22:00</MenuItem>
              <MenuItem value="23">23:00</MenuItem>
              <MenuItem value="24">24:00</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">До</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={hour2}
              label="Опыт Работы"
              onChange={(handleChangeHour2, (e) => setHour2(e.target.value))}
            >
              <MenuItem value="1">1:00</MenuItem>
              <MenuItem value="2">2:00</MenuItem>
              <MenuItem value="3">3:00</MenuItem>
              <MenuItem value="4">4:00</MenuItem>
              <MenuItem value="5">5:00</MenuItem>
              <MenuItem value="6">6:00</MenuItem>
              <MenuItem value="7">7:00</MenuItem>
              <MenuItem value="8">8:00</MenuItem>
              <MenuItem value="9">9:00</MenuItem>
              <MenuItem value="10">10:00</MenuItem>
              <MenuItem value="11">11:00</MenuItem>
              <MenuItem value="12">12:00</MenuItem>
              <MenuItem value="13">13:00</MenuItem>
              <MenuItem value="14">14:00</MenuItem>
              <MenuItem value="15">15:00</MenuItem>
              <MenuItem value="16">16:00</MenuItem>
              <MenuItem value="17">17:00</MenuItem>
              <MenuItem value="18">18:00</MenuItem>
              <MenuItem value="19">19:00</MenuItem>
              <MenuItem value="20">20:00</MenuItem>
              <MenuItem value="21">21:00</MenuItem>
              <MenuItem value="22">22:00</MenuItem>
              <MenuItem value="23">23:00</MenuItem>
              <MenuItem value="24">24:00</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      {/* description */}
      <div className="description">
        <TextField
          style={{
            width: "100%",
            margin: "50px auto",
          }}
          id="outlined-multiline-static"
          label="Описание"
          multiline
          value={desc}
          rows={10}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      {/* price */}
      <div className="price">
        <TextField
          label="Цена"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          onChange={(e) => setPrice(e.target.value)}
          InputProps={{
            endAdornment: <InputAdornment position="end">сом</InputAdornment>,
          }}
        />
      </div>
      <div className="button">
        <button className="custom-btn btn-4 " onClick={handleSave}>
          <span>Сохранить</span>
        </button>
      </div>
    </>
  );
};

export default BecomeAWorkerPage;
