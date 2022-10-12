import React from 'react';


class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
            title: 'This is List',
        };
    }
    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
    } 

    componentDidUpdate() {

    }
    render() 
    { 
        return ( 
            <div className='element text-left'>
                <input type="checkbox"></input><label className="ml-[5px]">{this.state.title}</label>
                <div className="line border-t border-slate-200 my-[5px] w-full"></div>
            </div>); 
    } 

}


export default ToDoList;