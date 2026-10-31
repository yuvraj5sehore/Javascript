import { useState } from 'react'
import './App.css'

function App() {
  const [products,setProducts] = useState([]);
  let timerId = useRef(null);
  function onInputChange(event){
    setQuery(event.target.value);
  }
  async function getData(){
    if(query.trim().length == 0) return;
    console.log("GetData called for query",query);
    let apiData = await apiData.json();
    setProducts(data.products);
  }
 return(
  
 )
}

export default App
