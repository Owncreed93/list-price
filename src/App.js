import React, { useState } from 'react';
import PropTyes from 'prop-types';

// **************************************************************************** //

import styled from '@emotion/styled';

// **************************************************************************** //

import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

// **************************************************************************** //

const Contenedor = styled.div`

      max-width: 600px;
      padding: 0 3rem;
      margin: 0 auto;

`;

const ContenedorFormulario = styled.div`

      background-color: #FFF;
      padding: 3rem;

`

function App() {

  const [ resumen, guardarResumen ] = useState({

    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }

  });

  const [ cargando, guardarCargando ] =  useState( false );

  // extract data
  const { cotizacion, datos } = resumen;

  return (
      <Contenedor>

        <Header titulo='Cotizador de Seguros' />

        <ContenedorFormulario>
          <Formulario 
                guardarResumen={guardarResumen}
                guardarCargando={guardarCargando}
          />
          
          { cargando ? <Spinner /> : null }

          <Resumen datos={ datos } />

          { !cargando 
        
            ?

            <Resultado cotizacion={ cotizacion } />

            :

            null

          }

          
          
        </ContenedorFormulario>

      </Contenedor>


    // https://gist.github.com/juanpablogdl/c70d8f047c3d8c99abfbb1c92f6f4e5e
  );
}

Formulario.propTypes = {

  guardarResumen: PropTyes.func.isRequired,
  guardarCargando: PropTyes.func.isRequired

}

export default App;
