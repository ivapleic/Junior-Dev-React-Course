import './App.css'
import Pozdrav from "./components/Pozdrav";

function App() {

  const datum=new Date();
  const a=20;
  const b=30;
  const god=21;

  console.log("Ispis u konzoli!");
  return (
    <>
      <p>Dobro došli u React!</p>
      <p>Danas je: {datum.toString()}</p>
      <p className='izracun'>{a}+{b}={a+b}</p>

      {/* <Pozdrav ime="Iva" god={god}/>
      <Pozdrav ime="Ivo" god={22}/>
      <Pozdrav ime="Ivan" god={33}/>  */}

      <Pozdrav>
        <p>Ovo je child dio Pozdrav komponente.</p>
      </Pozdrav>
    </>
  )
}

export default App
