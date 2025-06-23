import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const CarsPage = () => {
  const [searchParams] = useSearchParams();

  const [categories, setCategories] = useState([]);
  const [cars, setCars] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("/api/categories/")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  useEffect(() => {
    let url = "/api/cars/";
    const params = new URLSearchParams();

    if (selectedCategory) params.append("category", selectedCategory);
    if (priceMin) params.append("price_min", priceMin);
    if (priceMax) params.append("price_max", priceMax);
    if (sortOrder) params.append("ordering", sortOrder === "asc" ? "title" : "-title");

    if (params.toString()) url += "?" + params.toString();

    fetch(url)
      .then((res) => res.json())
      .then(setCars);
  }, [selectedCategory, priceMin, priceMax, sortOrder]);

  return (
    <div className="wrap">
      <div className="content">
        <h2 style={{ marginBottom: "20px" }}>Фильтры</h2>

        <div className="filters" style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "30px",
          padding: "20px",
          background: "#f9f9f9",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>
          {/* Категория */}
          <div style={{ display: "flex", flexDirection: "column", minWidth: "180px" }}>
            <label style={{ marginBottom: "6px", fontWeight: "bold" }}>Категория:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: "10px",
                fontSize: "15px",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            >
              <option value="">Все категории</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* Цена от */}
          <div style={{ display: "flex", flexDirection: "column", minWidth: "120px" }}>
            <label style={{ marginBottom: "6px", fontWeight: "bold" }}>Цена от:</label>
            <input
              type="number"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              placeholder="₽"
              style={{
                padding: "10px",
                fontSize: "15px",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />
          </div>

          {/* Цена до */}
          <div style={{ display: "flex", flexDirection: "column", minWidth: "120px" }}>
            <label style={{ marginBottom: "6px", fontWeight: "bold" }}>Цена до:</label>
            <input
              type="number"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              placeholder="₽"
              style={{
                padding: "10px",
                fontSize: "15px",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />
          </div>

          {/* Сортировка */}
          <div style={{ display: "flex", flexDirection: "column", minWidth: "160px" }}>
            <label style={{ marginBottom: "6px", fontWeight: "bold" }}>Сортировка:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              style={{
                padding: "10px",
                fontSize: "15px",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            >
              <option value="asc">От А до Я</option>
              <option value="desc">От Я до А</option>
            </select>
          </div>
        </div>

        <div className="section group">
          {cars.map((car) => (
            <div className="grid_1_of_4 images_1_of_4" key={car.id}>
              <h3>Модель {car.title}</h3>
              <Link to={`/cars/${car.id}`}>
                <img src={car.image} alt={car.title} />
              </Link>
              <p>{car.description.slice(0, 200)}...</p>
              <div className="btn">
                <Link to={`/cars/${car.id}`} className="link">
                  <span><span>Читать далее</span></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsPage;