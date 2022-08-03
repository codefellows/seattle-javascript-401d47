import { useSelector, useDispatch } from "react-redux";

import { vote } from "../../store/actions";

const AltCandidates = () => {

  let candidates = useSelector(state => state.candidates);
  let totalVotes = useSelector(state => state.votes.totalVotes);
  let categories = useSelector(state => state.categories);

  let dispatch = useDispatch();

  // console.log('candidate from alt', candidates)
  // console.log('categories from alt', categories)


  // const handleVote = (candidate) => {
  //   let action = vote(candidate);
  //   dispatch(action)
  // }
  return (
    <>
      <h3>AltCandidates total votes: {totalVotes}</h3>
      {candidates.map((candidate, idx) => (
        // <button onClick={() => handleVote(candidate)}>Vote: {candidate.name}</button>
        <button onClick={() => dispatch(vote(candidate))}>Vote: {candidate.name}</button>

      ))}
    </>
  )
};

export default AltCandidates;
