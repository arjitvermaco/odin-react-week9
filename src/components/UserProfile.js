import React, { useContext } from 'react'
import LoginComponent from './LoginComponent'
import { AppContext } from '../Context/AppContext'
import UserProfileCard from './UserProfileCard'

export default function UserProfile() {
    const appContext = useContext(AppContext)
  return (
    <div>

        {appContext.loggedIn ?<UserProfileCard/>:<LoginComponent/>}
       
    </div>
  )
}
