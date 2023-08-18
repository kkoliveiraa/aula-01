

export default function App() {

var nome = "Weverton";
const time = [
    "Palmeiras",
    "Corinthians",
    "Samtos",
    "São Paulo"

];

  return (
    <>
    <div>
      <h1>React + Vite</h1>

      <h2>RM550815</h2>

      <p>Melhor goleiro : {nome}</p>

    <ul>
      {time.map((item,key) =>
      <li key={key}>{item}</li>)}
    </ul>

    </div>
    </>
  )
}
