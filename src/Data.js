import React, { useState } from 'react'
import "./App.css"
import { FcExpand, FcCollapse } from 'react-icons/fc';

const Data = ({ title, body }) => {

    const [showCont, showContM] = useState(false)

    const modify = () => {
        showContM(!showCont)

    }
    return (

        <div className="accordion-item" onClick={modify}>
            <div className='acordion-title'>

                {showCont ? (
                   <div> 
                    <div class="container">
                        <div class="first-element" >

                            <h2>{title}</h2>

                        </div>
                        <div class="second-element" >

                            <p><FcCollapse /></p>

                        </div>
                        

                    </div>

                    <div>

                        <p>{body}</p>
                        </div>
                    </div>
                   

                ) : (
                    <div className='acordion-title'    >
                        <h5>{title}</h5>
                        <p ><FcExpand /></p>
                    </div>
                )}
            </div>
        </div>
    )

}

export default Data