import Righttop from "./Compo/Righttop"; 
import Rightbot from "./Compo/Rightbot"
import Left from "./Compo/Left"; 

import './App.css';

function App() {
  return (
    <div className="App" style={{  display:'flex', alignItems: 'center',  justifyContent:'center', backgroundColor: '#282C31', height: '100vh', gap:'15px', width: '100%' }}>
      <div className="leftbox" style={{ marginLeft:'10px', paddingLeft:'2vh', backgroundColor:'#565758', borderRadius:"10px", display:'flex', alignItems:'center',  height: '80%', width: '50%' }}>
      <Left/>
      </div>
      <div className="rightbox"  style={{ paddingLeft:'2vh',  height: '80%', width: '50%' }} >
          <Righttop/>
   
      <Rightbot/>
      </div>
    </div>
  );
}

export default App;
