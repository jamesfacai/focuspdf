import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>FocusPDF - Quote Generator</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-indigo-700">FocusPDF</h1>
        <p className="mb-6 text-lg text-center">Create professional quotes in seconds. Export as PDF. Impress your clients.</p>
        <form className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Get Early Access
          </button>
        </form>
      </main>
    </>
  )
}