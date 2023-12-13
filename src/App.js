// import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions/index';

function App() {
  const myState=useSelector((state)=> state.changTheNumber)
  const dispatch=useDispatch();
  return (
    <>
      <h1>welcome to redux</h1>
      <div>
            <h1>Shopping Cart</h1>
            <div>
                <div>
                    <button onClick={()=>dispatch(decNumber())}>-</button>
                    <span>{myState}</span>
                    <button onClick={()=>dispatch(incNumber(5))}>+</button>
                </div>   
            </div>
        </div>
    </>
  );
}

export default App;
