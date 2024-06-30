
'use client';

import Link from 'next/link';

export default function about() {
  return (
    <div >
      <div className="text-6xl">
        about</div>
      <Link href="/about/team"> <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2></Link>
    </div>
  )
}
