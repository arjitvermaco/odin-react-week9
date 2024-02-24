import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {

    const [user,setUser] = useState("Arjit")
    const [user2,setUser2] = useState("Abhishek")


    //Structure of useEffect
    // useEffect(()=>{},[])

    // 1:without any dependency array 
    //It will run on component loads
    // It will also run everytime any state is changed!!
    useEffect(()=>{
        console.log("From first use effect!!!")
    })

    // 2.With empty dependency Array
    //It will run only the first time when component loads
    useEffect(()=>{
        console.log("From the second use Effect!!!")
    },[])

    //3.With items in dependecy array
    //It will run the first time
    //it will also run when any item in the depency array changes
    useEffect(()=>{
        console.log("From the third use Effect!!!")
    },[user])


  return (
    <div>
        {user}
        <br/>
        <button onClick={()=>{setUser("Ravi!!")}}>Change User</button>
        <br/>
        {user2}
        <br/>

        <button onClick={()=>{setUser2("Akash!!")}}>Change User2</button>

   
    </div>
  )
}
