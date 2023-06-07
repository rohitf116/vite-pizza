import "./App.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const Header = () => {
  return <h1>Fast pizza</h1>;
};
const Menu = () => {
  return (
    <>
      <h2>Our menu</h2>
      {pizzaData.map((pizza, i) => (
        <div key={i}>
          <img src={pizza.photoName} />
          <h1>{pizza.name}</h1>
          <p>{pizza.ingredients}</p>
          <h2>{pizza.price}</h2>
          {pizza.soldOut === false ? <h3>Avalable</h3> : <h3>Not Avalable</h3>}
        </div>
      ))}
    </>
  );
};
const Footer = () => {
  return <footer>Were currently open</footer>;
};
function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
