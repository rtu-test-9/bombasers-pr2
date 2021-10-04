import TicTacToe from './TicTacToe';

let turn = true;

function App() {
  return (
    <div className="App">
      { turn ? <div>Ваш ход!</div> : <div>Пожалуйста, подождите</div> } 
      <TicTacToe turn={true}></TicTacToe>
    </div>
  );
}

export default App;
