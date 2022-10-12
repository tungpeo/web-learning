import './Component.js';
import './App.css';
import './index.css';
import React from 'react';
import ToDoList from './Component.js';
import {useState} from 'react';

function App() {

  const [list, setList] = useState('');

  const Change = e =>{
    e.setState({
      
    })
  }


  return (
    <div className="App bg-[#eeeeee] w-screen h-screen flex flex-col items-center">
      <div className="rounded-l bg-white border-solid border-1 w-fit h-fit mt-[25px]">
        <div className= "thingstodo p-[25px] flex flex-col gap-4">
            <h1 className="text-4xl font-normal">THINGS TO DO</h1>
            <input type="text" id="list" value={list} onChange={Change} className=" w-[600px] p-2 rounded-md border text-sm shadow-sm border-slate-300 border-gray-400 focus:ring-1 focus:outline-none focus:border-sky-500" placeholder="Add New"></input>
            <button onClick={Change}>Add</button>
            <div className='element text-left'>
                <input type="checkbox"></input><label className="ml-[5px]">Learn Javascript</label>
                <div className="line border-t border-slate-200 my-[5px] w-full"></div>
            </div>
            
            <ToDoList/>
        </div>  
          <div className="tag bg-[#f4fce8] border-t justify-between w-full px-[35px] h-[50px] flex items-center">
            <div className="tag1 gap-4 flex h-full items-center py-3">
              <a className="add inline-block leading-3 opacity-50 "></a>
              <a className="search inline-block leading-3"></a>
              <div className="border-l border-slate-200 h-full"></div>
              <div className="left opacity-50">10 items total</div>
            </div>

            <div className="tag1 gap-4 flex h-full items-center py-3 ">
              <button onClick="" className="text-s">All</button>
              <button onClick="" className="text-s">Active</button>
              <button onClick="" className="text-s">Completed</button>
            </div>

              </div>
        </div>
    </div>
  );
}

export default App;
