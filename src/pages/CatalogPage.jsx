import React from "react";
import Navbar from "../components/HomePage/Navbar";
import "../styles/catalogPage.css";

const CatalogPage = () => {
  return (
    <>
      <Navbar />
      <div className="sidenav">
        <button className="sidenav_btn">Все категории</button>
        <button className="sidenav_btn">Ремонт и строительство</button>
        <button className="sidenav_btn">Ремонт и установка техники</button>
        <button className="sidenav_btn">Ремонт авто</button>
        <button className="sidenav_btn">Репетиторы и обучение</button>
        <button className="sidenav_btn">Красота</button>
        <button className="sidenav_btn">Перевозки и курьеры</button>
        <button className="sidenav_btn">Хозяйство и уборка</button>
        <button className="sidenav_btn">Компьютеры и IT</button>
        <button className="sidenav_btn">Дизайнеры</button>
        <button className="sidenav_btn">Аренда</button>
        <button className="sidenav_btn">Юристы</button>
        <button className="sidenav_btn">Тренеры</button>
        <button className="sidenav_btn">Фото, видео, аудио</button>
        <button className="sidenav_btn">Творчество, рукоделие и хобби</button>
        <button className="sidenav_btn">Организация мероприятий</button>
        <button className="sidenav_btn">Артисты</button>
        <button className="sidenav_btn">Артисты</button>
      </div>
    </>
  );
};

export default CatalogPage;
