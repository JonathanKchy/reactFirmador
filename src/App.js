import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Este es el título</h1>
        <Testimonio 
        nombre='Andres'
        pais='Ecuador'
        imagen='azul'
        cargo='Arquitecto'
        empresa='Sodig'
        testimonio='este es mi testimonio 
        qqqqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqsssssssssssssssssssssssssssssssssssssssssssssssss ssssssssssssssssssssss sssssssssssssssssssssss ssssssssssssssssssssss sssssssssssssss'/>
      
      <Testimonio 
        nombre='Andres'
        pais='Ecuador'
        imagen='blanco'
        cargo='Arquitecto'
        empresa='Sodig'
        testimonio='este es mi testimonio 
        qqqqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqsssssssssssssssssssssssssssssssssssssssssssssssss ssssssssssssssssssssss sssssssssssssssssssssss ssssssssssssssssssssss sssssssssssssss'/>
      </div>
    </div>
  );
}

export default App;
