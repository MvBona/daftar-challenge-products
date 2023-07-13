import React from 'react';
import {render, screen} from '@testing-library/react'
import App from '../App';

describe('', () => {
  it("Será validado se existe um input texto para o nome", () => {
      render(<App />);
      const nameInput = screen.getByTestId(/name-input/i);
      expect(nameInput).toBeInTheDocument();
    });
    
  it("Será validado se existe um input textarea para descrição", () => {
      render(<App />);
      const descInput = screen.getByTestId(/description-input/i);
      expect(descInput).toBeInTheDocument();
    });

  it("Será validado se existe um input textarea para o preço", () => {
    render(<App />);
    const priceInput = screen.getByTestId(/price-input/i);
    expect(priceInput).toBeInTheDocument();
  });

  it("Será validado se existe um botão `adicionar`", () => {
      render(<App />);
      const addBtn = screen.getByTestId(/add-button/i);
      expect(addBtn).toBeInTheDocument();
  });
});
