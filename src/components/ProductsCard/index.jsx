import { Component } from 'react';

class ProductCard extends Component {

  render() {

    const { product, placeHolder } = this.props;

    return (
      <div className="card-produto">
        <img src={product.urlImage} alt={product.nome} />
        <div className='produto-descricao'>
          <h1>
            {product.name}</h1>
          <h2>
            Tipo: {product.format}
          </h2>
          <h3>
            Descrição: {product.cover}
          </h3>
        </div>
      </div>
    );
  }
}

export { ProductCard };