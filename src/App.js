import logo from "./logo.svg";
import "./App.css";

const lista_uzytkownikow = [
  { imie: "Ola" },
  { imie: "Kinga" },
  { imie: "Mateusz" },
  { imie: "Tomasz" },
];
console.log(lista_uzytkownikow);

function App() {
  return (
    <div className="App">
      <header className="App-header">geoinformatyka rządzi</header>
      {lista_uzytkownikow.map((zolnierz) => {
        return <div>{zolnierz.imie}</div>;
      })}
    </div>
  );
}

export default App;
