import React from "react";
import { useFav } from "../contexts/FavoritesContext";

export default function FavoritesPage() {
  const { getFavorite, favorites, deleteProductInFavorite } = useFav();

  React.useEffect(() => {
    getFavorite();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("favorite");
    getFavorite();
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {favorites?.products.map((row) => (
          <div className="blog-card spring-fever">
            <div className="title-content">
              <h3>{row.item.name}</h3>
              <hr />
              {/* <div className="intro">КАТЕГОРИЯ: {item.category}</div> */}
              <div className="intro">ОПЫТ: {row.item.experience}</div>
            </div>
            <div className="card-info">{row.item.desc}</div>
            <div className="utility-info">
              <ul className="utility-list">
                <li className="price">Цена: {row.item.price} coм</li>
                <li className="phone">Тел: {row.item.phone_number}</li>
                <br />
                <li className="phone">С: {row.item.hour_from} : 00 </li>
                <li className="phone">До: {row.item.hour_to} : 00</li>
              </ul>
              <button
                onClick={() => {
                  deleteProductInFavorite(row.item.id);
                }}
              >
                Удалить
              </button>
            </div>
            <div className="gradient-overlay"></div>
            <div className="color-overlay"></div>
          </div>
        ))}
      </div>
    </>
  );
}
