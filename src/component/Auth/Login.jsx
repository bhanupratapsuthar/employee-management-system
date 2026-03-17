import React, {useState} from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email, password);
        

        setEmail("");
        setPassword("");
    }
  return (
    <div>
        <div className='flex items-center justify-center w-screen h-screen'>
            <div className='border-2 border-emerald-600 rounded-xl p-20'>
                <form action="" onSubmit={(e) => {handleSubmit(e)}} className='flex flex-col items-center'>
                    <input 
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required 
                        className='border-2 border-emerald-600 text-xl text-gray-100 placeholder:text-gray-400 outline-none p-3 bg-transparent rounded-full' 
                        type="email" 
                        placeholder='Enter Your Email' 
                    />
                    <input 
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required 
                        className='border-2 border-emerald-600 text-xl text-gray-100 placeholder:text-gray-400 mt-3 py-3 px-3 outline-none bg-transparent rounded-full' 
                        type="password" 
                        placeholder='Enter Your Password' 
                    />
                    <button 
                        className='bg-emerald-600 text-white text-xl py-3 px-5 rounded-full mt-5'
                        type='submit'
                    >
                            Login
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login