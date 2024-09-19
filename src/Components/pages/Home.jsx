import React from 'react';
import C_carrossel from './C_carrossel';
import C_cards from './C_cards';
import C_feautes from '../C_feautes';
import C_parceria from './C_parceria';
import C_saude from './C_saude';
import C_pacotes from './C_pacotes';
import C_outros from './C_outros';
const Home = () => {
    return (
        <div>
            <C_carrossel />
            <C_cards />
            <C_feautes />
            <C_parceria />
            <C_saude />
            <C_pacotes />
            <C_outros />
        </div>
    );
};

export default Home;