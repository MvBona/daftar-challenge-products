import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
            <p>Nome</p>
            <input 
            type="text" 
            id="name" 
            data-testid="name-input"
            />
        </label>
        <label htmlFor="descricao">
            <p>Descrição</p>
            <input 
            type="textarea"
            id="descricao" 
            data-testid="description-input"
            />
        </label>
        <label htmlFor="price">
            <p>Preço</p>
            <input 
            type="number" 
            id="price" 
            data-testid="price-input"
            />
        </label>
      </form>
    )
  }
}
