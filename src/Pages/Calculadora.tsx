import CalcChurrasco from "../Components/CalcChurrasco"
import bgImage from "../assets/bg-1.jpg"

const Calculadora = () => {
  return (
    <div className="page-container" style={{backgroundImage: `url(${bgImage})`}}>
        <h1>Calculadora de Churrasco</h1>
        <CalcChurrasco/>
    </div>
  )
}

export default Calculadora