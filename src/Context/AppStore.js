import React, { useState } from 'react'
import { AppContext } from './AppContext'
export default function AppStore({children}) {

  const [user,setUser] = useState({
    name:"Arjit Verma",
    email:"arjit@gmail.com",
    password:"123abc123",
    profileImage: "https://i.pravatar.cc/150?img=3"
  })

  const [loggedIn,setLoggedIn] = useState(false)

  const [appName,setAppName]  = useState("My New App!!!")

  const [userTheme,setUserTheme] = useState("Light")

  return (
    <AppContext.Provider value={{appName,setAppName,userTheme,setUserTheme,user,loggedIn,setLoggedIn}}>
        {children}
    </AppContext.Provider>
  )
}
