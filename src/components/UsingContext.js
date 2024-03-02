import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export default function UsingContext() {
  const appContext = useContext(AppContext)

  console.log(appContext)
  return (
    <div>
        {appContext.appName}
    </div>
  )
}
