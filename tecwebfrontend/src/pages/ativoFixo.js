import React from 'react';
import './ativoFixo.css';


function AtivoFixo() {
  return (
    <div className ='Ativo' >  
    <h1 className= 'titulo'> Cadastro de Ativos </h1>
    <form>
      <label>Descrição: </label>     
      <input type='text' ></input>

      <label>localização: </label>
      <input type='text' ></input>

      <label>Numero de Patrimonio: </label>
      <input type='text' ></input>

      <label>Modelo: </label>
      <input type='text' ></input>

      <label>ID do Colaborador: </label>
      <input type='text' ></input>

      <button type='submit'>Salvar</button>

    </form>

    </div>

  );


}

export default AtivoFixo;