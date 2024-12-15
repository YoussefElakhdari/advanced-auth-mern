import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Lock } from 'lucide-react'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import PasswordStrenghtMeter from '../components/passwordStrenghtMeter'

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();

    }
  return (
     <motion.div 
     initial={{ opacity:0, y: 20 }}
     animate={{ opacity:1, y: 0 }}
     transition={{ duration: 0.5 }}
     className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl shadow-xl
      overflow-hidden'>
      <div className='p-8'>
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-tr from-blue-400
         to-cyan-500 text-transparent bg-clip-text'>Create Account</h2>
      </div>
      <form onSubmit={handleSubmit}>
            <Input 
                icon={User}
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}/>

                <Input 
                icon={Mail}
                type="email"
                placeholder="Email Adress"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>

                <Input 
                icon={Lock}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>

                <PasswordStrenghtMeter password={password} />
                
                <motion.button className="mt-5 ml-5 mb-4 w-11/12 py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-600
                text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-700
                focus:outline-none focus:ring-2 focus: ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
                transition duration-200"
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                type='submit'>
                    Sign Up
                </motion.button>
      </form>
      <div className='px-4 py-3 bg-gray-800 bg-opacity-50 flex justify-center'>
        <p className='text-sm text-gray-400'>Already have an account?{" "}
            <Link to={"/login"} className='text-blue-400 hover:underline'>Login</Link>
        </p>
      </div>
    </motion.div>
  )
}

export default SignupPage
