import "./App.css";

const Header = () => {
  return <h2>My hello</h2>;
};

const Field = () => {
  const holder = "Enter here!!!";
  const styledField = {
    width: "300px",
  };

  return <input placeholder={holder}
    type="text"
    style={styledField} />;
};

function Btn() {
  const text = "Log IN";
  const logged = true;

  return <button>{logged ? "Enter" : text}</button>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export {Header};
export default App;
