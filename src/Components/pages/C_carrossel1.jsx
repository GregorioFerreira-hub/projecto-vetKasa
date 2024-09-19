import React from 'react';
import C_header from './C_header';
import C_carrossel from './C_carrossel';
import C_cards from './C_cards';
import C_sobreNos from './C_sobreNos';
import C_parceria from './C_parceria';
import C_pacotes from './C_pacotes';
import C_saude from './C_saude';
import C_outros from './C_outros';
const C_carrossel1 = () => {
    return (
        <div>
            <C_header />
            <C_carrossel />
            <C_cards />
            <C_sobreNos />
            <C_parceria />
            <C_saude />
            <C_pacotes />
            <C_outros />

        </div>
    );
};

export default C_carrossel1;