import React from 'react'
import Header from '@/components/Header'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'



export default function Login() {

 

  return (
    <div className='flex flex-col items-center'>
      <Header/>
       
      <div className="flex justify-between w-[500px] mt-40">
          <LoginForm/>
          <RegistrationForm/>
      </div>
     
     
    </div>
  )
}
