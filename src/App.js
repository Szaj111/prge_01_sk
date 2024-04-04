import "./App.css";

const lista_uzytkownikow = [
  { imie: "Ola" },
  { imie: "Kinga" },
  { imie: "Mateusz" },
  { imie: "Tomasz" },
];

function App() {
  return (
    <div className="App">
      {lista_uzytkownikow.map((zolnierz) => {
        return <div>{zolnierz.imie}</div>;
      })}
    </div>
  );
}

export default App;
