
import './ativoFixo.css';
import React, { useEffect, useState } from 'react';
import api from '../services/api';

function AtivoFixo() {

  const[localizacao, setLocalizacao] = useState("");
  const[descricao, setDescricao] = useState("");
  const[numeroPatrimonio,  setPatrimonio] = useState("");
  const[modelo, setModelo] = useState("");
  const[idcolab, setIdcolab] = useState([]);
  const[ativos, setAtivos] = useState([]);

  async function getAtivo() {
    const resposta =  await api.get('/ativo');   
    setAtivos(resposta.data);
};

useEffect(() => {
    getAtivo();
}, []);

 
  return (
    <div className ='Ativo' >  
    <h1 className= 'titulo'> Cadastro de Ativos </h1>
    <form>
      
      <label>Descrição: </label>     
      <input 
      name="descricao"
      value={descricao}
      onChange={ e => setDescricao(e.target.value)}
      type='text' ></input>

          <label>localização: </label>
      <input 
      name="localizacao"
      value={localizacao}
      onChange={ e => setLocalizacao(e.target.value)}
      type='text' ></input>

      <label>Numero de Patrimonio: </label>
      <input 
      name="numeroPatrimonio"
      value={numeroPatrimonio}
      onChange={ e => setPatrimonio(e.target.value)}      
      type='text' ></input>

      <label>Modelo: </label>
      <input
       name="modelo"
       value={modelo}
       onChange={ e => setModelo(e.target.value)}
      
      type='text' ></input>

      <label>ID do Colaborador: </label>
      <input 
       name="IdColaborador"
       value={idcolab}
       onChange={ e => setIdcolab(e.target.value)}
       type='text' ></input>
       
      
      <br/><br/>
        Descrição =  {descricao}
        <br/>
        Localização =  {localizacao}
        <br/>
        Numero de Patrimonio  =  {numeroPatrimonio}
        <br/>
        Modelo  =  {modelo}
        <br/>
        ID do Colaborador  =  {idcolab}

      <button type='submit'>Salvar</button>

    

    </form>

    <h1>Lista de Ativos</h1>
                    <div>
                         {ativos.map(ativo => (
                              <div  key={ativo.id}>{ativo.id}: {ativo.descricao} - {ativo.numeroPatrimonio} - {ativo.modelo} - {ativo.localizacao}</div>
                         ))}
                   
                    </div>
      
        
    </div>

  );

  


}

export default AtivoFixo;