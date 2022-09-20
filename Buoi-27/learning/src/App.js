import Button from './component/Button.js'
import './component/index.css'

function App() {
  return (
    <div className="App" style={{
      display:"flex",
      width:"100%",
      height:"100px",
      backgroundColor:"#282c34",
      boxSizing:"border-box",
      alignItems:"center"

    }
    }>
      <div className="logo" style={{
        color:"#61dafb",
        display:"flex",
        alignItems:"center",
        gap:"10px"
      }}>
        <img src='/logo192.png' width="80px"></img>
        <h1>React</h1>
      </div>
    </div>
  );
}

export default App;
