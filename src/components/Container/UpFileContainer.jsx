import React, {useState} from 'react'

const UpFileContainer = () => {
    const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const [result, setResult] = useState(null)
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {/* <img className="h-48 w-full object-cover md:w-48" src="/image-placeholder.jpg" alt="Placeholder" /> */}
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Upload File</div>
          <div className="mt-2">
            <input type="file" onChange={handleFileChange} />
          </div>
          {file && (
            <div className="mt-2">
              <span className="font-bold">Selected file:</span> {file.name}
            </div>
          )}
          <div className='flex flex-row mt-4 py-8 bg-white rounded-xl'>
                  <h1 className='mr-8 text-xl font-bold '>Result = </h1>
                  <h1 className='text-xl font-bold'>{result}</h1>
                </div>
        </div>
      </div>
    </div>
  )
}

export default UpFileContainer