import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../store/actions';
import { getCategories } from '../../store/categories.slice';


const Categories = (props) => {

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  console.log('categories directly from redux state', categories)

  useEffect(() => {
    dispatch(getCategories())
  }, []);

  // if using mapStateToProps 
  // console.log('category props', props.categories)
  return (
    <>
      <h3>Categories</h3>
      {
        categories.categories.results.map((category, idx) => (
          <button key={`category-${idx}`} onClick={() => dispatch(selectCategory(category.name))}>{category.name}</button>
        ))
      }
    </>
  )
};

// const mapStateToProps = (state) => {
//   // console.log('from mapStateToProps', state);
//   return {
//     categories: state.categories,
//   }
// }

// see dispatch(getCategory(category.name)) - it replaces this
// const mapDispatchToProps = {
//   selectCategory
// }


export default Categories;
