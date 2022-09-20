import Header from './component/header/header.js'
import './App.css';
import {useState} from 'react'

function App() {
  let i = 0;
  let [value, setValue] = useState(0);

  const Count = () => {
    console.log(i, value);
    i = i + 1;
    setValue(value + 1)
  }
  console.log('reload')
  return (
    <div className="App flex flex-col items-center gap-5 justify-center">
      <div className="text-xs">Giá trị: {i}</div>
      <div className="text-xs">So: (State): {value}</div>
      <button onClick={Count} className="rounded-sm bg-black text-white">Count up</button>
    </div>
  );
}

export default App;
