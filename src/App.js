import React, { Fragment } from 'react';

// **************************************************************************** //

import styled from '@emotion/styled';

// **************************************************************************** //

import Header from './components/Header';
import Formulario from './components/Formulario';

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
  return (
      <Contenedor>

        <Header titulo='Cotizador de Seguros' />

        <ContenedorFormulario>
          <Formulario />
        </ContenedorFormulario>

      </Contenedor>


    // https://gist.github.com/juanpablogdl/c70d8f047c3d8c99abfbb1c92f6f4e5e
  );
}

export default App;
