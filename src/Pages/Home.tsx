import { User } from "lucide-react"

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
    <div className="p-3 w-full border-b-[2px] border-gray-600/40">
        <div className="px-4 md:px-8 lg:px-32 mx-auto flex flex-row justify-between items-center">
            <h1 className="font-bold text-xl">Front-<span className="text-red-600">End</span></h1>

            <nav className="flex flex-row gap-10">
              <a href="" className="font-semibold hover:text-red-600">Home</a>
              <a href="" className="font-semibold hover:text-red-600">About</a>
              <a href="" className="font-semibold hover:text-red-600">Service</a>
              <a href="" className="font-semibold hover:text-red-600">Portfolio</a>
              <a href="" className="font-semibold hover:text-red-600">Contact Us</a>
            </nav>
            
            <div className="flex flex-row gap-5">
                <p className="flex flex-row gap-2 items-center">
                    <span className="w-8 h-8 rounded-full bg-gray-500 p-1 overflow-hidden">
                    <User className="w-full h-full object-cover text-white"/>
                    </span> username@gmail.com
                </p>
                 <a href="/register"><button className="hover:text-red-600">Register</button></a> |
                 <a href="/login"><button className="hover:text-red-600">Login</button></a>
            </div>
        </div>
    </div>

    <div className="gap-2 px-4 md:px-8 lg:px-32">
        <div className="p-5 border-[2px] border-gray-600/40 flex flex-row justify-between">
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-2xl mb-5">Credentials</h1>
                <p className="text-xl font-semibold">Name: </p>
                <p className="text-xl font-semibold">Email: </p>
                <p className="text-xl font-semibold">Password: </p>
            </div>

            <div className="w-80 h-80 border-[2px] border-gray-500/60 rounded flex justify-center items-center">
                <p>Your Image here...!</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
