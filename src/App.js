import React, { useEffect, useState } from 'react'
import Data from './Data';

const App = () => {

  const [showData,setShowData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts"

  const loadData = () => {

    fetch(url,{
            method:'GET'
         
    }).then(res=>(res.json())).then(result=>{

      if(result){
        console.log(result)

        setShowData(result)
      }
    }).catch((err)=>{

      console.log(err)
    })

    
  }
  useEffect(()=>{

    loadData();


  },[]);


  return (
  // <div className='container'>{JSON.stringify(showData)} </div>
  <div className='container'> 
  <div className='row'>
            {
              showData.map((item,index)=>(
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={index}> 
                <Data {...item}/>
                </div>
              ))
            }
     </div>
  </div>




  )
}

export default App