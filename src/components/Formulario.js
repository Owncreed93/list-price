import React, { useState } from 'react';

// **************************************************************************** //

import styled from '@emotion/styled';


// **************************************************************************** //

import { obtenerDiferenciaYear } from '../helper';

// **************************************************************************** //

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex : 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = () => {

    const [ datos, guardarDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [ error, guardarError ] = useState(false);

    // Extract values from state
    const { marca, year, plan } = datos;


    // Read data from the Form
    const obtenerInformacion = e => {

        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })

    };

    // User press submit
    const cotizarSeguro = e => {

        e.preventDefault();

        if( marca.trim() === '' || year.trim() === '' || plan.trim() === '' ) {

            guardarError( true );
            return;

        }

        guardarError( false );

        // Base of 2000
        let resultado = 2000;

        // Obtain year difference
        const diferencia = obtenerDiferenciaYear( year );
        console.log(diferencia);

        // Each year substrac the 3%
        resultado -= ( ( diferencia * 3 ) *  resultado ) / 100;

        console.log( resultado )

        /**
         * American 0.15 - 15%
         * Asiatic 0.05 - 0.5%
         * Europeo 0.30 - 30%
         */

        // Basic increases 20%
        // Completo increases 50%

        //  Total 

    };



    return ( 
        <form
            onSubmit={cotizarSeguro}
            >
            
            { error ? <Error> Todos los campos son obligatorios. </Error> : null }

            <Campo>
                <Label>Marcas</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={ obtenerInformacion }
                    >
                    <option value="">-- Seleccione --</option>
                    <option value="americano" >Americano</option>
                    <option value="europeo" >Europeo</option>
                    <option value="asiatico" >Asiático</option>
                </Select>
            </Campo>
            

            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={ obtenerInformacion }
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>

                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked = { plan === "basico" }
                    onChange={ obtenerInformacion }
                />B&aacute;sico

                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked = { plan === "completo" }
                    onChange={ obtenerInformacion }
                />Completo
            </Campo>

            <Boton tpye="submit">Cotizar</Boton>

        </form>
     );
}
 
export default Formulario;