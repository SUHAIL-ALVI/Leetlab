import { UserButton } from "@clerk/nextjs";

import React from 'react'

const Home = () => {
  return (
    <div className="flex items-center justify-center"> 
    <UserButton />
    </div>
  )
}

export default Home