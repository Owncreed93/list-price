export function obtenerDiferenciaYear( year ){

    return new Date().getFullYear() - year;

}

// CALCULATE PAID TOTAL PER BRAND
export function calcularMarca(marca) {

    let incremento = 0.0;

    switch(marca){

        case 'europeo':
            incremento = 1.30;
            break;
        
        case 'americano':
            incremento = 1.15;
            break;
        
        case 'asiatico':
            incremento = 1.05;
            break;

        default:
            break;

    }

    return incremento;

}

// CALCULATE INSURANCE'S TYPE
export function obtenerPlan( plan ){

    return ( plan === 'basico' ) ? 1.20 : 1.50;

}

// SHOW CAPITAL LETTER
export function primeraMayuscula( texto ) {

    return `${texto.charAt(0).toUpperCase()}${texto.slice(1)}`; 

}