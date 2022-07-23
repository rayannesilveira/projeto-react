import './styles.css';
import { Component } from 'react';
import { loadProducts } from '../../utils/loadProducts';
import { ProductsGrid } from '../../components/ProductsGrid';
import { InputSearch } from '../../components/InputSearch';

class Home extends Component {
  state = {
    placeHolder: "https://via.placeholder.com/600/d32776",
    products: [],
    searchValue: ''
  };


  async componentDidMount() {
    await this.loadProducts();
  }

  loadProducts = async () => {
    const productsJson = await loadProducts();
    this.setState({ products: productsJson });
  }

  handleChange = (e)=>{
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { products, placeHolder, searchValue } = this.state;
    const filteredProducts = !!searchValue ? 
    products.filter( product => {
      return product.name.toLowerCase().includes(searchValue.toLowerCase());
    }) : products;

    return (
      <section className="container">

       <div className="search">
       <InputSearch 
          searchValue={searchValue}
          handleChange={this.handleChange}
        />
       </div>
        <ProductsGrid 
          products={filteredProducts}
          placeHolder={placeHolder}
        />
      </section>
    );
  }
}
export default Home;
