"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from 'next/navigation'
import { useEffect } from "react";


export default function BentoGridPage({}) {
    const params = useParams<{ name: string }>()
    const [isUser,setisUser]=useState<boolean>()
    useEffect(()=>{
        if (params.name){
            //auth service
            setisUser(false)
        }
    },[])

    



  return (
    <>
   { isUser ? (<></>) : (
    <div className=" flex justify-center bg-white  items-center min-h-screen">
<div
  className="grid h-[400px] hover:cursor-pointer w-[750px] grid-cols-3 grid-rows-3 gap-4 p-4 rounded-xl bg-white/30 backdrop-blur-lg shadow-lg border border-white/50"
>
<div className="absolute inset-0 -z-20 right-0 h-full w-full">
    <img
      src="/image.png"
      alt="Background Image"
      className="h-full w-full  object-cover rounded-r-xl"
    />
  </div>

  <div className="col-span-1 text-black text-2xl border-2 rounded-md row-span-1">
    <h1>I am Hithesh!!</h1>
  </div>
  <div className="col-span-2 row-span-1 text-black text-2xl border-2 rounded-md ">
    <h1>I am from BMS college of Engineering</h1>
  </div>
  <div className="col-span-1 row-span-3 text-black text-2xl border-2 rounded-md ">
    <h1>I am a developer My projects are:</h1>
    <p className=" text-sm">NoSign :- an dontpad Clone</p>
    <p className=" text-sm"> Acme Blog:- a blogging application</p>
  </div>
</div>
    </div>)
   }  
   </>
);
}
