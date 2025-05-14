import image1 from "../assets/Jayz.jpg";
import { UploadCloudIcon } from "lucide-react";
import { useRef, useState } from "react";

const Registration = () => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleClick = () => {
    inputFileRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
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
          <h1 className="text-2xl font-bold">Registration</h1>
          {/* Images */}
          <div
            className="border-2 border-gray-500/30 w-48 h-32 rounded flex flex-col items-center justify-center gap-2 hover:bg-slate-400/25 cursor-pointer bg-cover bg-center"
            style={{ backgroundImage: image ? `url(${image})` : "none" }}
            onClick={handleClick}
          >
            {!image && (
              <h1 className="font-semibold text-gray-500 text-[12px] flex flex-col items-center justify-center">
                Click to upload profile
                <UploadCloudIcon className="text-gray-500" />
              </h1>
            )}

            <input
              type="file"
              accept="image/*"
              ref={inputFileRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
          {/* first Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-[12px]">
              Names
            </label>
            <input
              type="text"
              className="bg-transparent text-[12px] outline-none border-[1px] border-gray-500/20 focus:border-2 focus:border-gray-500/40 p-1 pl-3 rounded"
              placeholder="Please Enter Your First Name"
            />
          </div>
          {/* Last name*/}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-[12px]">
              Email
            </label>
            <input
              type="text"
              className="bg-transparent text-[12px] outline-none border-[1px] border-gray-500/20 focus:border-2 focus:border-gray-500/40 p-1 pl-3 rounded"
              placeholder="Please Enter Your First Name"
            />
          </div>
          {/*Email*/}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-[12px]">
              Password
            </label>
            <input
              type="email"
              className="bg-transparent text-[12px] outline-none border-[1px] border-gray-500/20 focus:border-2 focus:border-gray-500/40 p-1 pl-3 rounded"
              placeholder="Please Enter Your First Name"
            />
          </div>
          {/*Email*/}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold text-[12px]">
              Confirm Password
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
            <a href='/registration' className="text-[12px] font-semibold">Don't have account? <span className="text-blue-600 underline cursor-pointer hover:text-blue-400">Click here</span></a>
            <a href="/" className='text-red-600 hover:text-red-400 text-[12px] font-semibold underline'>Back Home</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
