'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

interface User {
  name: string;
  college: string;
  role: string;
  project: string;
}

export default function BentoGridPage() {
  const params = useParams<{ name: string }>();
  const [isUser, setIsUser] = useState<User | null>(null); // Initialize with null for safe checks

  useEffect(() => {
    if (params.name) {
      fetch(`/api/getEmail?email=${params.name}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Failed to fetch user data');
          }
          return res.json();
        })
        .then(data => {
          console.log(data);
          setIsUser(data?.data?.data || null); // Update with fetched user data
        })
        .catch(err => {
          console.error('Error fetching user data:', err);
          setIsUser(null); // Reset state on error
        });
    }
  }, [params.name]);

  return (
    <>
      {isUser ? (
        <div className="flex justify-center bg-white items-center min-h-screen">
          <div className="grid h-[400px] hover:cursor-pointer w-[750px] grid-cols-3 grid-rows-3 gap-4 p-4 rounded-xl bg-white/30 backdrop-blur-lg shadow-lg border border-white/50">
            {/* Background Image */}
            <div className="absolute inset-0 -z-20 h-full w-full">
              <img
                src="/image.png"
                alt="Background Image"
                className="h-full w-full object-cover rounded-r-xl"
              />
            </div>

            {/* User Name */}
            <div className="col-span-1 text-black text-2xl border-2 rounded-md row-span-1">
              <h1>{isUser.name}</h1>
            </div>

            {/* College Name */}
            <div className="col-span-2 row-span-1 text-black text-2xl border-2 rounded-md">
              <h1>{isUser.college}</h1>
            </div>

            {/* Role and Projects */}
            <div className="col-span-1 row-span-3 text-black text-2xl border-2 rounded-md">
              <h1>{isUser.role}</h1>
              <p className="text-sm">{isUser.project}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}
