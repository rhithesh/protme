"use client"
import { useState } from "react";
import { toast } from "sonner";

export default function Register() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState(
     ""
  );
  const [open,setopen]=useState<boolean>(false)

  const handleRegister =async () => {
  try{
    const data=await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(details),
    })
    setopen(true)

  }
  catch (error){
    
    console.log(error)

  }

}

const otpVerify= async ()=>{
  try{
    const data=await fetch('/api/register', {
      method: 'PUT',
      body: JSON.stringify({
        email:details.email,verificationCode:otp}),
    })
    toast.success("Otp Verified")
    setopen(true)

  }
  catch (error){
    toast.error("Otp Not Verified")
    
    console.log(error)

  }
}

  return (
    <div className=" h-screen  p-8 flex justify-center items-center border-l-4 border-black">
      <div className="w-80 p-6 bg-white border-4 border-black rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Create Now</h1>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Name</label>
          <input
            type="text"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            className="w-full border-2 border-black px-2 py-1 rounded"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-lg font-medium">Email</label>
          <input
            type="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            className="w-full border-2 border-black px-2 py-1 rounded"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-lg font-medium">Password</label>
          <input
            type="password"
            value={details.password}
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
            className="w-full border-2 border-black px-2 py-1 rounded"
          />
        </div>

        { open ?(
          <input
          type="number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border-2 border-black px-2 py-1 rounded"
        />
        ):null

        }

        {/* Register Button */}
        <button
          onClick={()=>{
            if(!open){
            handleRegister()
            }else{
              otpVerify()
            }
          }}
          className="w-full bg-yellow-400 border-2 border-black text-lg font-semibold py-2 rounded hover:bg-yellow-300 transition"
        >
         { open ?  
         "Verfy": "Register"}
        </button>

        {/* Login Link */}
        <div className="underline-offset-1 underline text-right text-lg font-medium text-black hover:text-yellow-400 transition cursor-pointer mt-4">
          <p>Already have an account? Login</p>
        </div>
      </div>
    </div>
  );
}
