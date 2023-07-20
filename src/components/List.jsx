/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


function List() {
  const items = useSelector(state => state.items);
  const [listaNaoVazia, setListaNaoVazia] = useState(items.length > 0);

  useEffect(() => {
    setListaNaoVazia(items.length > 0);
  }, [items]);

  const enviarParaAPI = () => {
    const URL = 'http://localhost:5000/products'
    axios.post(URL, items)
      .then(response => {
        console.log('Produtos enviados para a API com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao enviar produtos para a API:', error);
      });
  };

  return (
    <div>
      <h2>Itens</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <p>Preço: R${item.preco.toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <button 
      type="button" 
      onClick={enviarParaAPI} 
      disabled={!listaNaoVazia}
      >Enviar
      </button>
    </div>
  );
}

export default List;
