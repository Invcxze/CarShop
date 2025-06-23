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

        {/* Обновленный контейнер для карточек */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "25px",
          justifyContent: "center"
        }}>
          {cars.map((car) => (
            <div key={car.id} style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #eaeaea",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              transition: "transform 0.3s ease",
              height: "100%",
              background: "#fff",
              ":hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 6px 12px rgba(0,0,0,0.1)"
              }
            }}>
              <div style={{ padding: "15px" }}>
                <h3 style={{ marginTop: "0", marginBottom: "15px", fontSize: "1.2em" }}>
                  Модель {car.title}
                </h3>

                <Link to={`/cars/${car.id}`} style={{ display: "block", marginBottom: "15px" }}>
                  <img
                    src={car.image}
                    alt={car.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "6px"
                    }}
                  />
                </Link>

                <p style={{
                  flexGrow: 1,
                  marginBottom: "15px",
                  color: "#555",
                  lineHeight: "1.5"
                }}>
                  {car.description.slice(0, 200)}...
                </p>
              </div>

              <div style={{
                padding: "15px",
                background: "#f9f9f9",
                marginTop: "auto"
              }}>
                <div className="btn">
                  <Link
                    to={`/cars/${car.id}`}
                    className="link"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "10px 15px",
                      background: "#4a6da7",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "5px",
                      fontWeight: "500",
                      transition: "background 0.3s",
                      ":hover": {
                        background: "#3a5a8a"
                      }
                    }}
                  >
                    Читать далее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsPage;