import { connect } from 'react-redux';
import { incrementCount } from '../../store/votes';

const Candidates = (props) => {

  const { totalVotes, candidates, incrementCount } = props;
  console.log('totalVotes:', totalVotes);
  console.log('candidates:', candidates);

  return (
    <>
    <h1>Total Candidate Votes: {totalVotes}</h1>
    {candidates.map((candidate, idx) => (
      <div key={`candidate-${idx}`}>
        <p>Name: {candidate.name}</p>
        <p>Votes: {candidate.votes}</p>
        <button onClick={() => incrementCount(candidate)}>Vote {candidate.name}</button>
      </div>
    ))}
    </>
  );
}

// adds redux state to props
const mapStateToProps = ({ votes }) => {
  return {
    totalVotes: votes.totalVotes,
    candidates: votes.candidates,
  }
  
}

// adds redux actionFunctions to props
const mapDispatchToProps = {
  incrementCount
}

// curry Candidates to the "higher order function"
export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
