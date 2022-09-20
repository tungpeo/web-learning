import './App.css';
import {useState} from 'react'

function App() {
  let [step, setStep] = useState(1)
  let [value, setValue] = useState("1");
  let [result, setResult] = useState("0");
  let [digit, setDigit] = useState("0");
  let [char, setChar] = useState("0");


  const NumberClick = (type) => () => {
    if([''])
    if(['1', '2', '3' , '4', '5', '6', '7', '8', '9', '0'].includes(type)){
      if(step == 1){
        const num = parseInt(type);
        setDigit = (digit + type);
        setResult(setDigit + type);
      }
      if(step == 2){

      }
    }
    else{
      switch(type){

      }
    }
  }


  return (
    <div className="App">
      <div className="w-screen h-[100px] bg-[#858694] box-border">
        <div className="digit float-right text-8xl pr-5 text-white leading-[80px]">{value}</div>
      </div>
      <div className="input">
        <div className="flex w-screen">
          <button onClick={NumberClick('AC')} className="AC flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px] border-1 border-black-500">AC</button>
          <button onClick={NumberClick('+/-')} className="addsub flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px]">+/-</button>
          <div onClick={NumberClick('percent')} className="percent flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px]">%</div>
          <div onClick={NumberClick('chia')} className="divide flex justify-center items-center text-6xl border-solid bg-[#f5923e] w-1/4 h-[100px] text-white">÷</div>
        </div>
        <div className="flex w-screen">
          <button onClick={NumberClick('1')} className="flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px]">1</button>
          <div onClick={NumberClick('2')} className="flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px]">2</div>
          <div onClick={NumberClick('3')} className="flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px]">3</div>
          <div  onClick={NumberClick('nhan')} className="double flex justify-center items-center text-6xl border-solid bg-[#f5923e] w-1/4 h-[100px] text-white">x</div>
        </div>
        <div className="flex w-screen">
          <div onClick={NumberClick('4')} className="flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px]">4</div>
          <div onClick={NumberClick('5')} className="flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px]">5</div>
          <div onClick={NumberClick('6')} className="flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px]">6</div>
          <div  onClick={NumberClick('tru')} className="sub flex justify-center items-center text-6xl border-solid bg-[#f5923e] w-1/4 h-[100px] text-white">-</div>
        </div>
        <div className="flex w-screen">
          <div onClick={NumberClick('7')} className="flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px]">7</div>
          <div onClick={NumberClick('8')} className="flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px]">8</div>
          <div onClick={NumberClick('9')} className="flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px]">9</div>
          <div onClick={NumberClick('cong')} className="flex justify-center items-center text-6xl border-solid bg-[#f5923e] w-1/4 h-[100px] text-white">+</div>
        </div>
        <div className="flex w-screen">
          <div onClick={() => {setValue("10")}} className="flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/2 h-[100px]">0</div>
          <div onClick={NumberClick('.')} className="flex justify-center items-center text-6xl border-solid bg-[#e0e0e0] w-1/4 h-[100px]">.</div>
          <div onClick={NumberClick('equal')} className="flex justify-center items-center text-6xl border-solid bg-[#f5923e] w-1/4 h-[100px] text-white">=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
