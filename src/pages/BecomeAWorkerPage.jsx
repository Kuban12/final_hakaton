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

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";

import TextField from "@mui/material/TextField";

import InputAdornment from "@mui/material/InputAdornment";

// custom imports
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

const names = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const BecomeAWorkerPage = () => {
  // category
  const [category, setCategory] = useState("");
  // for experiance
  const [age, setAge] = React.useState("");

  const handleChangeExper = (event) => {
    setAge(event.target.value);
  };

  //   for working days
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChangeDay = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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

  //   for price
  const [price, setPrice] = React.useState("");

  const handleChangePrice = (prop) => (event) => {
    setPrice(event.target.value);
  };

  // custom
  function handleSave() {
    if (!name.trim() || !lastName.trim() || !email.trim()) {
      alert("Some inputs are empty!");
    } else {
      console.log("HELLO", passConfirm);
      let formData = new FormData();
      formData.append("name_LastName", name);
      formData.append("category", name);
      formData.append("experiance", lastName);
      formData.append("working_days", email);
      formData.append("hour_from", pass);
      formData.append("hour_to", passConfirm);
      formData.append("description", image);
      formData.append("price", image);
      formData.append("image", image);

      handleRegister(formData, navigate);
    }
  }

  return (
    <>
      <FormControl className="work_categoryes_main">
        <FormLabel
          className="work_categoryes_title"
          id="demo-radio-buttons-group-label"
        >
          Выберите категории услуг
        </FormLabel>
        <RadioGroup
          className="work_categoryes_radios"
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            className="work_category_item"
            value="Ремонт и строительство"
            control={<Radio />}
            label="Ремонт и строительство"
          />
          <FormControlLabel
            className="work_category_item"
            value="Ремонт и установка техники"
            control={<Radio />}
            label="Ремонт и установка техники"
          />
          <FormControlLabel
            className="work_category_item"
            value="Ремонт авто"
            control={<Radio />}
            label="Ремонт авто"
          />
          <FormControlLabel
            className="work_category_item"
            value="Репетиторы и обучение"
            control={<Radio />}
            label="Репетиторы и обучение"
          />
          <FormControlLabel
            className="work_category_item"
            value="Красота"
            control={<Radio />}
            label="Красота"
          />
          <FormControlLabel
            className="work_category_item"
            value="Перевозки и курьеры"
            control={<Radio />}
            label="Перевозки и курьеры"
          />
          <FormControlLabel
            className="work_category_item"
            value="Хозяйство и уборка"
            control={<Radio />}
            label="Хозяйство и уборка"
          />
          <FormControlLabel
            className="work_category_item"
            value="Компьютеры и IT"
            control={<Radio />}
            label="Компьютеры и IT"
          />
          <FormControlLabel
            className="work_category_item"
            value="Дизайнеры"
            control={<Radio />}
            label="Дизайнеры"
          />
          <FormControlLabel
            className="work_category_item"
            value="Аренда"
            control={<Radio />}
            label="Аренда"
          />
          <FormControlLabel
            className="work_category_item"
            value="Юристы"
            control={<Radio />}
            label="Юристы"
          />
          <FormControlLabel
            className="work_category_item"
            value="Тренеры"
            control={<Radio />}
            label="Тренеры"
          />
          <FormControlLabel
            className="work_category_item"
            value="Фото, видео, аудио"
            control={<Radio />}
            label="Фото, видео, аудио"
          />
          <FormControlLabel
            className="work_category_item"
            value="Творчество, рукоделие и хобби"
            control={<Radio />}
            label="Творчество, рукоделие и хобби"
          />
          <FormControlLabel
            className="work_category_item"
            value="Организация мероприятий"
            control={<Radio />}
            label="Организация мероприятий"
          />
          <FormControlLabel
            className="work_category_item"
            value="Артисты"
            control={<Radio />}
            label="Артисты"
          />
          <FormControlLabel
            className="work_category_item"
            value="Охрана и детективы"
            control={<Radio />}
            label="Охрана и детективы"
          />
          <FormControlLabel
            className="work_category_item"
            value="Услуги для животных"
            control={<Radio />}
            label="Услуги для животных"
          />
          <FormControlLabel
            className="work_category_item"
            value="Разное"
            control={<Radio />}
            label="Разное"
          />
        </RadioGroup>
      </FormControl>
      {/* ////////////////////////////////////////////////////////////////////////////// experiance  */}
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Опыт Работы</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Опыт Работы"
            onChange={handleChangeExper}
          >
            <MenuItem value={1}>Один год</MenuItem>
            <MenuItem value={2}>Два года</MenuItem>
            <MenuItem value={3}>Три года</MenuItem>
            <MenuItem value={4}>Четыре года</MenuItem>
            <MenuItem value={5}>Пять лет</MenuItem>
            <MenuItem value={8}>Восемь лет</MenuItem>
            <MenuItem value={10}>Десять лет</MenuItem>
            <MenuItem value={15}>Пятнадцать лет</MenuItem>
            <MenuItem value={20}>Двадцать лет</MenuItem>
            <MenuItem value={25}>Двадцать пять лет</MenuItem>
            <MenuItem value={30}>Тридцать лет</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* working days */}
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChangeDay}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* working hours */}
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">От</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={hour1}
            label="Опыт Работы"
            onChange={handleChangeHour1}
          >
            <MenuItem value={1}>1:00</MenuItem>
            <MenuItem value={2}>2:00</MenuItem>
            <MenuItem value={3}>3:00</MenuItem>
            <MenuItem value={4}>4:00</MenuItem>
            <MenuItem value={5}>5:00</MenuItem>
            <MenuItem value={6}>6:00</MenuItem>
            <MenuItem value={7}>7:00</MenuItem>
            <MenuItem value={8}>8:00</MenuItem>
            <MenuItem value={9}>9:00</MenuItem>
            <MenuItem value={10}>10:00</MenuItem>
            <MenuItem value={11}>11:00</MenuItem>
            <MenuItem value={12}>12:00</MenuItem>
            <MenuItem value={13}>13:00</MenuItem>
            <MenuItem value={14}>14:00</MenuItem>
            <MenuItem value={15}>15:00</MenuItem>
            <MenuItem value={16}>16:00</MenuItem>
            <MenuItem value={17}>17:00</MenuItem>
            <MenuItem value={18}>18:00</MenuItem>
            <MenuItem value={19}>19:00</MenuItem>
            <MenuItem value={20}>20:00</MenuItem>
            <MenuItem value={21}>21:00</MenuItem>
            <MenuItem value={22}>22:00</MenuItem>
            <MenuItem value={23}>23:00</MenuItem>
            <MenuItem value={24}>24:00</MenuItem>
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
            onChange={handleChangeHour2}
          >
            <MenuItem value={1}>1:00</MenuItem>
            <MenuItem value={2}>2:00</MenuItem>
            <MenuItem value={3}>3:00</MenuItem>
            <MenuItem value={4}>4:00</MenuItem>
            <MenuItem value={5}>5:00</MenuItem>
            <MenuItem value={6}>6:00</MenuItem>
            <MenuItem value={7}>7:00</MenuItem>
            <MenuItem value={8}>8:00</MenuItem>
            <MenuItem value={9}>9:00</MenuItem>
            <MenuItem value={10}>10:00</MenuItem>
            <MenuItem value={11}>11:00</MenuItem>
            <MenuItem value={12}>12:00</MenuItem>
            <MenuItem value={13}>13:00</MenuItem>
            <MenuItem value={14}>14:00</MenuItem>
            <MenuItem value={15}>15:00</MenuItem>
            <MenuItem value={16}>16:00</MenuItem>
            <MenuItem value={17}>17:00</MenuItem>
            <MenuItem value={18}>18:00</MenuItem>
            <MenuItem value={19}>19:00</MenuItem>
            <MenuItem value={20}>20:00</MenuItem>
            <MenuItem value={21}>21:00</MenuItem>
            <MenuItem value={22}>22:00</MenuItem>
            <MenuItem value={23}>23:00</MenuItem>
            <MenuItem value={24}>24:00</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* description */}
      <TextField
        id="outlined-multiline-static"
        label="Описание"
        multiline
        rows={10}
      />

      {/* price */}
      <TextField
        label="Цена"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        InputProps={{
          endAdornment: <InputAdornment position="end">сом</InputAdornment>,
        }}
      />
      {/* image */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button className="custom-btn btn-4" onClick={handleSave}>
        <span>Сохранить</span>
      </button>
    </>
  );
};

export default BecomeAWorkerPage;
