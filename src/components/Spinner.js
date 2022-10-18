import React  from 'react'
import loading from './loading.gif';

 const Spinner = ()=>{

    

        return (

            <div className="container ">

               <div className="text-center "> <img className="my-3" src={loading} alt = " loading" /> </div>

            </div>

        )
    
} 

export default Spinner;