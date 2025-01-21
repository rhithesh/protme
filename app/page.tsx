"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  return (
    <div className="min-h-screen  font-retro">
      <header className="fixed w-[400px] mt-1 rounded-xl border-b-4 border-black bg-yellow-400  px-6 fixed py-4 flex justify-center space-x-10 text-lg font-bold uppercase text-black">
        <h1 className="hover:text-orange-600 hover:cursor-pointer transition">About Us</h1>
        <h1 className="hover:text-orange-600  hover:cursor-pointer transition">YouTube Video</h1>
        <h1 className="hover:text-orange-600 hover:cursor-pointer transition">Get Started</h1>
      </header>

      <main className="pt-10 ">
        {/* Landing Section */}
        <div className="flex h-[100vh]  mx-8 mt-8 rounded-lg overflow-hidden ">
          <div className="basis-1/2  flex justify-center items-center p-4">
            <Image src="/image.png" height={400} width={400} alt="Landing Image" className="rounded-lg " />
          </div>
          <div className="basis-1/2  p-8 flex justify-center items-center ">
            <div className="w-80 p-6 bg-white border-4 border-black rounded-lg ">
              <h1 className="text-2xl font-bold mb-6 text-center">Create Now</h1>
              <div className="mb-4">
                <label className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  onChange={(e) => setDetails({ ...details, email: e.target.value })}
                  className="w-full border-2 border-black px-2 py-1 rounded"
                />
              </div>
              <div className="mb-6">
                <label className="block text-lg font-medium">Password</label>
                <input
                  type="password"
                  onChange={(e) => setDetails({ ...details, password: e.target.value })}
                  className="w-full border-2 border-black px-2 py-1 rounded"
                />
              </div>
              <div onClick={()=>{
                router.push("/register")
              }} className=" underline-offset-1 underline text-right text-lg font-medium text-black hover:text-yellow-400 transition cursor-pointer">
                <p>Register</p>
              </div>
              <button className="w-full bg-yellow-400 border-2 border-black text-lg font-semibold py-2 rounded hover:bg-yellow-300 transition">
                Loginn
              </button>
            </div>
          </div>
        </div>

        {/* Pokémon Section */}
        <div className="flex mt-12 mx-8 border-4 border-black rounded-lg overflow-hidden shadow-lg">
          <div className="basis-1/2 bg-yellow-200 flex justify-center items-center">
            <Image src="/pokemon.png" alt="Pokemon" width={300} height={300} className="rounded-lg shadow" />
          </div>
          <div className="basis-1/2 bg-yellow-300 p-8 flex justify-center items-center">
            <p className="text-lg font-medium leading-relaxed text-center">
              A Pokémon Passport is your ultimate trainer identity, showcasing your journey through the Pokémon world.
              Personalize it with your name, trainer ID, region, and avatar while collecting stamps for gym badges,
              tournaments, and special events. Track your Pokédex progress, celebrate rare catches, and build connections
              with other trainers. Whether digital or physical, your Pokémon Passport turns your adventure into a unique
              story worth sharing!
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 bg-yellow-500 border-t-4 border-black py-8">
          <div className="flex justify-between px-10">
            <p className="text-lg font-bold">
              My name is Hithesh, Creator of Protme &copy; 2024
            </p>
            <div className="flex space-x-8">
              <div>
                <h1 className="font-bold mb-2">Quick Links</h1>
                <ul className="space-y-1">
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>My Projects</li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold mb-2">Get In Touch</h1>
                <ul className="space-y-1">
                  <li>YouTube Video</li>
                  <li>Feedback</li>
                  <li>Mail Me</li>
                  <li>My Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
