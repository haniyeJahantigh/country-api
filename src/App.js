import { useState , useEffect} from 'react';
import './App.css';
import PageTempelate from './components/PageTemplate'
import Card from './components/Card'
function App() {
    const [data,setData]=useState([])

    useEffect(() => {
      const getData= async()=>{
        const dataFromServer=await fetchData();
        setData(dataFromServer)
    
      }
      getData()
    }, [])

    /*
 * fetch data from backend
 */
const fetchData= async()=>{
  try{
    const responce= await fetch(" https://restcountries.eu/rest/v2/")
    const data= await responce.json();
    return data;
  }catch(e){
    // toast.error("request failed!");
    console.log(e);
  }
}

const handleCity=(e)=>{
  console.log(e.target.id);
  fetch(`https://restcountries.eu/rest/v2/name/${e.target.id}`)
  .then(res => res.json())
  .then((res) =>{
      console.log("sjdkhjsd" , res);
      setData(res)
  })
}

    



  return (
    <div className="App">
      <PageTempelate/>
      <div className="row d-flex m-5">
            {data.map(item =>{
                 return(<div className='col-md-2 mt-3'>
                   <Card cardTitle={item.name} onClick={handleCity} />
                 </div>
                )
            })}
       </div>
    </div>
  );
}

export default App;
