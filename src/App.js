import './App.css';

import freeCodeCampLogo from './imagenes/sodig-sin-fondo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
//import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdfFile from './pdf/pki.pdf';

//import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';

function App() {

  const [defaultPdfFile]=useState(pdfFile);

  //const defaultLayoutPluginInstance=defaultLayoutPlugin();
  const [numClics,setNumClics]= useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' />
      </div>
      
      <div className='pdf-container'>
        {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <Viewer fileUrl={defaultPdfFile}
              //plugins={[defaultLayoutPluginInstance]}
              //defaultScale={SpecialZoomLevel.PageFit}
              />
        </Worker></>}
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
