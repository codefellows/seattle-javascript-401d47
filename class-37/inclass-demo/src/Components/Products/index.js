import { connect } from 'react-redux';


const Products = (props) => {
  console.log('products props', props)

  let products = props.products.filter(product => product.category === props.activeCategory);
  console.log(products);

  return (
    <>
      <h3>Products</h3>
      {products.map((item, idx) => <p>{item.name}</p>)}
    </>
  )
};

const mapStateToProps = (state) => {
  console.log('products mapStateToProps', state)
  return {
    products: state.myStore.products,
    activeCategory: state.myStore.activeCategory
  }
}


export default connect(mapStateToProps)(Products);
