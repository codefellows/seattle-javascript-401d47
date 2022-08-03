import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/actions';
import { getTodos } from '../../store/todos';

const Products = (props) => {
  // console.log('products props LOOK HERE', props)
  let dispatch = useDispatch();

  let products = props.products.filter(product => product.category === props.activeCategory);
  // console.log('products to render', products);

  // const addItem = (product) => {
  //   dispatch(addToCart(product));
  // }

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <h3>Products</h3>
      {products.map((item, idx) => (
        <div key={`product-${idx}`} >
          <p >{item.name}</p>
          <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
        </div>
      ))}

      <h4>Todos</h4>


    </>
  )
};

const mapStateToProps = (state) => {
  // console.log('products mapStateToProps', state)
  return {
    products: state.products,
    activeCategory: state.activeCategory
  }
}


export default connect(mapStateToProps)(Products);
