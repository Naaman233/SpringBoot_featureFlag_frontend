"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-sm opacity-50">
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className="mb-3 text-2xl font-semibold">
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }

interface Product {
  id : number,
  name : string,
  price : number,
  description : string,
  createdAt : Date,
  updatedAt : Date
}

async function getData() {
  const response = await fetch("http://localhost:8080/api/v1/products/products")
  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  //console.log(response.json());
  return await response.json()
}

async function getButtonFeatureStatus() {
  const response = await fetch("http://localhost:8080/api/v1/feature-flag-manager/product-listing/enabled")
  if (!response.ok) {
    throw new Error("Error fetching data")
  }
  return await response.json()
}

export default function Home() {

  const [products,setProducts] = useState<Product[]>([])
  const [showListing,setListing] = useState(false)
  const [isFeatureEnabled,setFeatureFlag] = useState(false)
  
  useEffect(() => {

    getData()
    .then( data => {
      setProducts(data)
    })
    .catch(error => {
      console.error('Error setting data ', error)
    })

    getButtonFeatureStatus()
      .then(data => {
        setFeatureFlag(data)
      })
      .catch(error => {
        console.error('Error setting data ', error)
      })
  },[showListing])

  const handleShowListing = () => {
    setListing(true)
  }

  const handleRefresh = () => {
    getData()
      .then(data => {
        setProducts(data)
        console.log(isFeatureEnabled)
      })
      .catch(error => {
        console.error('Error setting data ', error)
      })
  }
  return (
    <>
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Product Listing</h1>

    {
      
      isFeatureEnabled && products.length > 0 && (
        <div className="mb-4">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleRefresh}
          >
            Refresh Table
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleShowListing}
          >
            Show Listing
          </button>
        </div>
      )
    }
{/* 
    <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleRefresh}
        >
          Refresh Table
        </button>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleShowListing}
        >
          Show Listing
        </button> */}


    {showListing && (
      <table className="w-full mt-4 border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border border-gray-200">Product ID</th>
            <th className="py-2 px-4 border border-gray-200">Product Name</th>
            <th className="py-2 px-4 border border-gray-200">Product Price</th>
            <th className="py-2 px-4 border border-gray-200">Product Description</th>
            <th className="py-2 px-4 border border-gray-200">Created At</th>
            <th className="py-2 px-4 border border-gray-200">Updated At</th>
          </tr>
        </thead>
        
        <tbody>
          {products.map(product => (
            <tr key={product.id} className="bg-white">
              <td className="py-2 px-4 border border-gray-200">{product.id}</td>
              <td className="py-2 px-4 border border-gray-200">{product.name}</td>
              <td className="py-2 px-4 border border-gray-200">{product.price}</td>
              <td className="py-2 px-4 border border-gray-200">{product.description}</td>
              <td className="py-2 px-4 border border-gray-200">{product.createdAt.toString()}</td>
              <td className="py-2 px-4 border border-gray-200">{product.updatedAt.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
    </>
  )
}