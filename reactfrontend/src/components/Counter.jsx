import { useState, useEffect} from "react"
 


const Counter = () => {
    const[counter,setCounter] = useState(0);
    const handleAdd = (add) => {
        console.log(add);
        setCounter(counter+1);
        
    }
    const handleSub = () => {
        setCounter(counter-1);
        
    }
    useEffect(() =>{
        printLog();

    },[counter])


    const printLog = () =>{
        console.log("it has shown the number");
    }


    return (
        <>
        
        <div className='h-[100vh] flex justify-center items-center'>
           {   
        !(counter=== 0) && <button onClick={handleSub}  className='bg-red-300 border-red-500'>-</button>
           }  
                   
               <h1>{counter}</h1>
               <button onClick={()=> handleAdd("add")} className='bg-blue-300 border-blue-500'>+</button>

        </div>
        </>







    )
    
}
export default Counter