import Article from '../article/'

const Content = (props) => {

  const { greeting, changeTitle } = props;

  return (
    <>
      <header data-testid="content-header">
        <h1 data-testid="content-h1">{greeting}</h1>
        <button data-testid="content-button" onClick={() => changeTitle('It Worked!')}>Change Title</button>
      </header>
      <Article />
    </>
  )
}

export default Content;
