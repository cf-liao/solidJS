import {createSignal,createEffect} from "solid-js"
import 'bootstrap/dist/css/bootstrap.min.css'

const increment=()=>setCount(count()+1)
const [count,setCount]=createSignal(0)

function App() {
  return (
    <div>
      <h1>原子</h1>
      <div>
        <button type="button" className="btn btn-success" onClick={increment}>
          Count {count()}
        </button>
      </div>
      
    </div>
  );
}

export default App;
