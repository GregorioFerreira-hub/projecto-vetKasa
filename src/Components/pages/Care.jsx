import React from 'react';
import FormMarcarConsulta from '../projecto/FormMarcarConsulta';
import '../pages/Care.module.css';
const Care = () => {
  return (
    <>
    <div className='container'>
      <div className='div1'>
        <h1>Confirmar e Pagar</h1>
        <h3>Esta a um passo de concluir o teu pedido</h3>
        <p>Apos o pagamento, recebera um email com mais informacoes sobre o servico adquirido</p>

        <p>Tem um cupom de desconto? <a href="#">Clique aqui e indique o codigo do seu cupom de desconto</a></p>
        <form>
          <h1>Detalhes da Faturacao</h1>
          <div>
            <label htmlFor="">Primeiro nome do Paciente*</label><br />
            <input type="text" placeholder='' />
          </div>
          <div>
            <label htmlFor="">Ultimo nome do Paciente*</label><br />
            <input type="text" placeholder='' />
          </div>

          <div>
            <label htmlFor="">Endereco de Email*</label><br />
            <input type="email" name="" id="" placeholder='Inserir' />
          </div>
          <div>
            <label htmlFor="">Telefone*</label><br />
            <input type="tel" name="" id="" placeholder='Inserir' />
          </div>
          <div>
            <label htmlFor="">Contribuinte - Para efeito de faturacao (Opcional)</label><br />
            <input type="text" name="" id="" placeholder='Numero de Contribuinte' />
          </div>
          <div>
            <label htmlFor="">Numero de Utente SNS</label><br />
            <input type="number" name="" id="" placeholder='Inserir' />
          </div>

          <div>
            <label htmlFor="">Numero do Cartao do Cidadao ou Passaporte</label><br />
            <input type="text" name="" id="" placeholder='' />
          </div>
          <div>
            <label htmlFor="">Tem seguro de saude?Se sim, insira o nome da seguradora e numero da apolice</label><br />
            <input type="text" name="" id="" placeholder='' />
          </div>
          <div>
            <label htmlFor="">Numero de Carta de Conducao e Categorias de Carta (Opcional, apenas para renovacao/substituicao de carta de conducao)</label><br />
            <input type="number" name="" id="" placeholder='' />
          </div>
          <div>
            <label htmlFor="">Morada</label><br />
            <input type="text" name="" id="" placeholder='Inserir' />
          </div>
          <div>
            <label htmlFor="">Codigo Postal</label><br />
            <input type="text" name="" id="" placeholder='Codigo Postal' />
          </div>
          <div>
            <label htmlFor="">Localidade</label><br />
            <input type="text" name="" id="" placeholder='Cidade' />
          </div>
          <div>
            <label htmlFor="">Pais/Regiao</label><br />
            <select name="cate" >
              <option disabled selected>Selecione o pais</option>
              <option >Angola</option>
              <option >Portugal</option>
              <option >EUA</option>
            </select>
          </div>
         


        </form>
      </div>

      <div className='div2'>
     
      <form>
        <h1>A Sua encomenda</h1>
        
        <div>
          <input type="submit" value="Finalizar Marcacao" />
        </div>


      </form>
      </div>
      </div>
    </>
  );
};

export default Care;