import React from 'react';

const FormConfirmarMarcar = () => {
    return (
        <form>
            <div>
            <input type="text" placeholder='Insira o nome do projecto' />
            </div>
            <div>
            <input type="number" placeholder='Insira o orcamento total' />
            </div>
            <div>
            <select name="category_id" >
                <option disabled selected>Selecione a categoria</option>
            </select>
            </div>
            <div>
                <input type="submit" value="Criar Projecto" />
            </div>

            
        </form>
    );
};

export default FormConfirmarMarcar;