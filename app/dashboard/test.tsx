"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function BentoGridPage() {
  const params = useParams<{ name: string }>();
  const [isUser, setIsUser] = useState<boolean>(false);

  // State to store input values for each part
  const [gridContent, setGridContent] = useState({
    part1: "I am Hithesh!!",
    part2: "I am from BMS college of Engineering",
    part3: "I am a developer. My projects are:",
    project1: "NoSign :- a dontpad Clone",
    project2: "Acme Blog:- a blogging application",
  });

  const handleInputChange = (key: string, value: string) => {
    setGridContent((prev) => ({ ...prev, [key]: value }));
  };

  const handelsave=()=>{

    fetch('/api/updateData', {
      method: 'POST',
      body: JSON.stringify(gridContent),
    }).then((res)=>res.json()).then((data)=>{
      console.log(data)
    })


  }

  useEffect(() => {
    if (params.name) {
      // Example authentication logic
      setIsUser(false);
    }
  }, []);

  return (
    <>
      {isUser ? (
        <></>
      ) : (
        <div className="flex justify-center bg-white items-center min-h-screen">
          <div className="relative grid h-[400px] hover:cursor-pointer w-[750px] grid-cols-3 grid-rows-3 gap-4 p-4 rounded-xl bg-white/30 backdrop-blur-lg shadow-lg border border-white/50">
            <div className="absolute inset-0 -z-20 right-0 h-full w-full">
              <img
                src="/image.png"
                alt="Background Image"
                className="h-full w-full object-cover rounded-r-xl"
              />
            </div>

            {/* Editable Part 1 */}
            <div
              className="col-span-1 text-black text-2xl border-2 rounded-md row-span-1 p-4"
              onClick={() => {
                const newValue = prompt(
                  "Enter new text for Part 1",
                  gridContent.part1
                );
                if (newValue) handleInputChange("part1", newValue);
              }}
            >
              <h1>{gridContent.part1}</h1>
            </div>

            {/* Editable Part 2 */}
            <div
              className="col-span-2 row-span-1 text-black text-2xl border-2 rounded-md p-4"
              onClick={() => {
                const newValue = prompt(
                  "Enter new text for Part 2",
                  gridContent.part2
                );
                if (newValue) handleInputChange("part2", newValue);
              }}
            >
              <h1>{gridContent.part2}</h1>
            </div>

            {/* Editable Part 3 */}
            <div className="col-span-1 row-span-3 text-black text-2xl border-2 rounded-md p-4">
              <h1
                onClick={() => {
                  const newValue = prompt(
                    "Enter new text for Part 3",
                    gridContent.part3
                  );
                  if (newValue) handleInputChange("part3", newValue);
                }}
              >
                {gridContent.part3}
              </h1>
              <p
                className="text-sm"
                onClick={() => {
                  const newValue = prompt(
                    "Enter new text for Project 1",
                    gridContent.project1
                  );
                  if (newValue) handleInputChange("project1", newValue);
                }}
              >
                {gridContent.project1}
              </p>
              <p
                className="text-sm"
                onClick={() => {
                  const newValue = prompt(
                    "Enter new text for Project 2",
                    gridContent.project2
                  );
                  if (newValue) handleInputChange("project2", newValue);
                }}
              >
                {gridContent.project2}
              </p>
            </div>
            <div>
        <button className=" bg-green-700 rounded-xl text-4xl" onClick={()=>{
          handelsave()
        }}>Save</button>
      </div>
          </div>
      
        </div>

      )}
      
    </>
  );
}
