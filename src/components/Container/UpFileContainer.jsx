import React, { useState, useEffect } from "react";
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';
 

const UpFileContainer = () => {
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    const sessionCheck = session // Lakukan pengecekan session Anda di sini

    if (!sessionCheck) {
      router.push('/signin'); // Ubah '/' dengan rute halaman root (home) yang sesuai
    }
  }, []);
  // const user = session.user;
  // console.log("ini session.user di upload file box");
  // console.log(user.email);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    
  };

  const handleSubmit = () => {
    console.log(file);
  }

  const [result, setResult] = useState(null);
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {/* <img className="h-48 w-full object-cover md:w-48" src="/image-placeholder.jpg" alt="Placeholder" /> */}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Upload File
          </div>
          <div className="mt-2">
            <input type="file" onChange={handleFileChange} />
          </div>
          {file && (
            <div className="mt-2">
              <span className="font-bold">Selected file:</span> {file.name}
            </div>
          )}
          <div>
            <button className="bg-blue-pale hover:bg-blue-medium text-white w-1/4 rounded-lg mt-4 text-xl font-bold" onClick={handleSubmit}>
              SCAN
            </button>
          </div>
          <div className="flex flex-row mt-4 py-8 bg-white rounded-xl">
            <h1 className="mr-8 text-xl font-bold ">Result = </h1>
            <h1 className="text-xl font-bold">{result}</h1>
          </div>
        </div>
      </div>
    </div>
  );

}

export default UpFileContainer;
