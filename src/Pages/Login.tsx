import image1 from '../assets/Jayz.jpg'

const Login = () => {
  return (
    <div className="w-full h-screen bg-slate-400 flex flex-row justify-center items-center">
      <form action="" className="bg-white p-5 w-1/2 rounded flex flex-row">
        <div className="bg-blue-800 w-80 h-full overflow-hidden rounded">
          <img
            src={image1}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 mt-5 px-10 w-1/2">
         <h1 className="text-2xl font-bold">Login Form</h1>
          {/* first Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-[12px]">
              Email
            </label>
            <input
              type="email"
              className="bg-transparent text-[12px] outline-none border-[1px] border-gray-500/20 focus:border-2 focus:border-gray-500/40 p-1 pl-3 rounded"
              placeholder="Please Enter Your First Name"
            />
          </div>
          {/*Password*/}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-[12px]">
              Password
            </label>
            <input
              type="text"
              className="bg-transparent text-[12px] outline-none border-[1px] border-gray-500/20 focus:border-2 focus:border-gray-500/40 p-1 pl-3 rounded"
              placeholder="Please Enter Your First Name"
            />
          </div>
          <button className="w-full p-2 bg-blue-700 text-white rounded hover:bg-blue-600">
            Register
          </button>
          <div className='flex flex-row justify-between items-center'>
            <a href='/registration' className="text-[12px] font-semibold">You Already Have? <span className="text-blue-600 underline cursor-pointer hover:text-blue-400">Click here</span></a>
            <a href="/" className='text-red-600 hover:text-red-400 text-[12px] font-semibold underline'>Back Home</a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
