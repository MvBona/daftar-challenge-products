/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionarItem } from '../redux/actions'; 

function Formulario() {
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [botaoHabilitado, setBotaoHabilitado] = useState(false);

  useEffect(() => {
    setBotaoHabilitado(nome.length > 0 && descricao.length > 0 && preco.length > 0);
  }, [nome, descricao, preco]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      nome,
      descricao,
      preco: parseFloat(preco)
    };

    dispatch(adicionarItem(newItem));

    setNome('');
    setDescricao('');
    setPreco('');
    setBotaoHabilitado(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="descricao">Descrição:</label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="preco">Preço:</label>
        <input
          type="number"
          id="preco"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
      </div>
      <button type="submit" disabled={!botaoHabilitado}>
        Adicionar
      </button>
    </form>
  );
}

export default Formulario;
