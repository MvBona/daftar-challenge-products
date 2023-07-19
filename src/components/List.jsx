/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';

function List() {
  const items = useSelector(state => state.items);

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
    </div>
  );
}

export default List;
