import { connect } from 'react-redux';
import Categories from '../Categories';
import Products from '../Products';


// import { }

// may translate to your App.js in your  class redux application
const Storefront = (props) => {

  // console.log('storefront props', props)
  return (
    <>
      <h3>Storefront WIP</h3>
      <Categories />
      {/* <Products /> */}
    </>
  )
};



// const mapStateToProps = ({ votes }) => {
//   return {
//     totalVotes: votes.totalVotes,
//     candidates: votes.candidates,
//   }

// }

const mapStateToProps = (state) => {
  // console.log('from mapStateToProps', state);
  return {
    myStore: state.myStore
  }
}

export default connect(mapStateToProps)(Storefront);

