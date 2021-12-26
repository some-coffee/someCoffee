import "./Menu.css";
function Menu() {
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
            <img src="Images/coffee-cup.jpg" id="coffee" />
            <h3>Morning coffee</h3>
          </div>
          <div>
            <img src="Images/breakfast.jpg" id="tea" />
            <h3>Breakfast tea</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
