import Link from 'next/link'
import SFLogo from './../../../../public/sf.svg'
import Image from 'next/image'

function Nav () {
  const textStyle = 'text-gray-600'

  return (
        <div className="border-b shadow-md bg-white">
            <div className="hidden md:flex md:justify-between mx-auto px-12 2xl:max-w-7xl max-w-6xl w-screen pt-4 pb-1">
                <Link href='/'>  <Image src={SFLogo} width="40" height="45" alt="" /></Link>
                <div className="space-x-3">
                    <Link href="/" className={textStyle}>Home</Link>

                    
                    <Link href="/donate" className={textStyle}>Get Involved</Link>
                    <Link href="/project" className={textStyle}>Project</Link>
                    <Link href="/about" className={textStyle}>About</Link>
                    <Link href="/login" className={textStyle}>Log In</Link>
                </div>
            </div >
        </div>
  )
}

export default Nav
