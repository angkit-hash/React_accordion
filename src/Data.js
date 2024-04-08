import React, { useState }  from 'react'
import "./App.css"
import { FcExpand,FcCollapse} from 'react-icons/fc';

const Data = ({title,body}) => {

   const [showCont , showContM] = useState(false)

   const modify = () =>{
     showContM(!showCont)

   }
    return(

        <div className="accordion-item" onClick={modify}>
            <div className='acordion-title'>
            <h5>{title}</h5>
                   <p><FcExpand /> </p>                                  
            </div>
          
            {showCont && <p>{body}</p>}
        </div>
    )

}

export default Data