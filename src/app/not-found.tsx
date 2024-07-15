import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='relative z-10 h-screen w-screen flex items-center justify-center flex-col gap-10 bg-black mb-[100vh]'>
      <h2 className='border p-3 rounded-xl'>Comming Soon</h2>

      <Link href="/" className='bg-white/20 backdrop-blur-xl rounded-xl p-3'>Return Home</Link>
    </div>
  )
}
