import Link from 'next/link'

const TopMenu = () => {
  return (
        <div className='border-b bg-white'>
            <div className='flex py-3 mx-2 space-x-5 justify-center'>
                <Link href='/project'>Project</Link>
                <Link href='/donate'>Donate</Link>
                <Link href='contact'>Contact</Link>
                <Link href='about'>About</Link>
            </div>
        </div>
  )
}

export default TopMenu
