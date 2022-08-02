import { connect } from 'react-redux';
import { selectCategory } from '../../store/storefront';


const Categories = (props) => {
  console.log('category props', props)
  return (
    <>
      <h3>Categories</h3>
      {
        props.categories.map((category, idx) => (
          <button onClick={() => props.selectCategory(category.normalizedName)}>{category.displayName}</button>
        ))
      }
    </>
  )
};

const mapStateToProps = (state) => {
  console.log('from mapStateToProps', state);
  return {
    categories: state.myStore.categories,
  }
}

const mapDispatchToProps = {
  selectCategory
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories);
