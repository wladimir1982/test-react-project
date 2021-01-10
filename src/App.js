import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log('cash @@@@@ ', cash)

   const addCash = () => {
    dispatch({type: 'ADD_CASH', payload: 5})
  }

  const getCash = () => {
    dispatch({type: 'GET_CASH', payload: 2})
  }

  return (
    <div className="App">
      <div>
        <div style={{fontSize: 30}}>{cash}</div>
        <button onClick={() => addCash()}>Пополнить счет</button>
        <button onClick={() => getCash()}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
