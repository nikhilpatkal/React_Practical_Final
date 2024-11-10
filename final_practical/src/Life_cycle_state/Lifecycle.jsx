import {React,useEffect, useState} from "react";

function Lifecycle(){
    const [count,setCount]=useState(1);
    useEffect(() => {
        console.log("Component loaded");
        fetchData();
        return()=>{
            console.log("Component Destory Done");
        }
      }, []);
    useEffect(() => {
        console.log("Component Updated: Inside update");
      }, [count]);

      const fetchData = async () =>{
        console.log("At the time of the component loaded called the fetch api to fetch the data from the backend")
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const result = await response.json();
            console.log(result);
            //setData(result); // Set the fetched data to state
          } catch (error) {
            console.error("Error fetching data:", error);
          }
      }
    return (
        <>
        <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
        </>
    );
}
export default Lifecycle;