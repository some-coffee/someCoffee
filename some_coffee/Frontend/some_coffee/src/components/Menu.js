import "./Menu.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const details = () => {
    navigate("/MenuDetails");
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Menu page</h1>
      <hr />
      <div className="Menu">
        <ul>
          <li>
            <h4>Drinks</h4>
          </li>
          <li>
            <a href="#Hot coffee">Hot Coffee</a>
          </li>
          <li>
            <a href="#Hot tea">Hot Tea</a>
          </li>
          <li>
            <a href="#Iced Tea">Iced Tea</a>
          </li>
          <li>
            <a href="#Cold Coffee">Cold Coffee</a>
          </li>
          <li>
            <h4>Cake</h4>
          </li>
          <li>
            <a href="#Iced Tea">Cheese Cake</a>
          </li>
          <li>
            <a href="#Iced Tea">Chocolote Cake</a>
          </li>
        </ul>

        <div className="menuItems">
          <div>
            <img src="Images/coffee-cup.jpg" id="coffee" onClick={details} />
            <h3>Morning coffee</h3>
          </div>
          <div>
            <img src="Images/breakfast.jpg" id="tea" />
            <h3>Breakfast tea</h3>
          </div>
        </div>
      </div>

      {products.map((product) => (
        <div key={product.productId}>
          <Link to={`/MenuDetails/${product.productId}`}>
            <h2> {product.name} </h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Menu;
