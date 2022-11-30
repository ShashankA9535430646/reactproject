import { useState,useEffect} from "react"
const State = () => {
    let [value,update] = useState(0)
    let fn1 = () =>{
        update(value+1) //++value
    }   
    let fn2 = () => {
        update(0)      
    }
    let fn3 = () => {
        update(value-1) //--value
    }

    


    useEffect( ()=>{
        console.log("it worked ...!");
    },[])
    return ( 
        <div className="usestate">
            <h1>{value}</h1>
            <button onClick={fn1}>Increase</button>
            <button onClick={fn2}>Reset</button>
            <button onClick={fn3}>Decrease</button>
        </div>
     );
}
 


// const State = () => {
//     let [value,update] = useState("disney")
//     let function_name = () => {
//         update("Disney+ hotstar")
        
//     }
//     return ( 
//         <div className="usestate">
//             <h1>{value}</h1>
//             <button onClick={function_name}>Click</button>
//         </div>
//      );
// }
 
export default State;