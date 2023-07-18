// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {endEdit, addProduct} from '../redux/actions'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: 1,
        name: '',
        description: '',
        price: 0,
        disabled: true,
    };
  }

  componentDidUpdate() {
    const { idToEdit, editor, products } = this.props;
    const { id } = this.state;
    const product = products[idToEdit];
    if (editor && id !== idToEdit) {
      this.setState(() => ({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
      }));
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.valid);
  };

  valid = () => {
    const { name, description, price } = this.state;
    if(name.length > 0 && description.length > 0 && price.length > 0) {
        this.setState({
          disabled: false,
        });
    }
    else {
        this.setState({
            disabled: true,
        });
    }
  };

  addProducts = () => {
    const { dispatch } = this.props;
    const { id, name, description, price } = this.state;    
    dispatch(addProduct({ id, name, description, price}))
  };

  editProduct = async () => {
    const { dispatch } = this.props;
    dispatch(endEdit(this.state));
  };

  handleClick = async () => {
    const { editor } = this.props;
    if (editor) {
      this.editProduct();
      return;
    }
    this.addProducts();
  };

  render() {
    const { editor } = this.props;
    const { name, description, price, disabled } = this.state;
    return (
      <form>
        <label htmlFor="name">
            <p>Nome</p>
            <input 
              type="text" 
              id="name" 
              name="name"
              data-testid="name-input"
              value={name}
              onChange={this.handleChange}
            />
        </label>
        <label htmlFor="description">
            <p>Descrição</p>
              <input 
              type="textarea"
              id="description" 
              name="description"
              data-testid="description-input"
              value={description}
              onChange={this.handleChange}
            />
        </label>
        <label htmlFor="price">
            <p>Preço</p>
              <input 
              type="number" 
              id="price" 
              name="price"
              data-testid="price-input"
              value={price}
              onChange={this.handleChange}
            />
        </label>
        <button 
          type="button"
          data-testid="add-button"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          { editor ? 'Editar' : 'Adicionar'}
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  editor: state.editor,
  idToEdit: state.idToEdit,
  products: state.products,
});

Form.propTypes = {
  editor: PropTypes.bool.isRequired,
  products: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  idToEdit: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Form);