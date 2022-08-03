import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { connect } from 'react-redux';
import { incrementCount, decrementCount, vote} from '../../store/actions';

const Candidates = (props) => {

  const { totalVotes, candidates, incrementCount, decrementCount } = props;
  // console.log('totalVotes:', totalVotes);
  // console.log('candidates:', candidates);

  return (
    <>
      <h1>Total Candidate Votes: {totalVotes}</h1>

      <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center', margin: '25px' }}>
        {candidates.map((candidate, idx) => (
          <Card sx={{ margin: '10px' }} raised key={`candidate-${idx}`}>
            <CardContent>
              <Typography variant="h5">Name: {candidate.name}</Typography>
              <Typography variant="hp" color="text.secondary">Votes: {candidate.votes}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="success" onClick={() => incrementCount(candidate)}>Vote {candidate.name}</Button>
              <Button variant="contained" color="secondary" onClick={() => decrementCount(candidate)}>Un-Vote {candidate.name}</Button>

            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}

// adds redux state to props
const mapStateToProps = ({ votes, candidates }) => {
  return {
    totalVotes: votes.totalVotes,
    candidates,
  }

}

// adds redux actionFunctions to props
const mapDispatchToProps = {
  vote,
  incrementCount,
  decrementCount,
}

/*
but you might see it like this ...
const mapDispatchToProps = ({
  increment: () => dispatch(increment()),
  reset: () => dispatch(reset()),
})
*/

// curry Candidates to the "higher order function"
export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
