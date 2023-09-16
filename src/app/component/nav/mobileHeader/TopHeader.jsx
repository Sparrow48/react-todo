import SFLogo from '../../../../../public/sf.svg'
import Link from 'next/link'
import Image from 'next/image'

const TopHeader = () => {

    return (
        <div className='bg-white'>
            <div className='flex justify-between '>
                <Link href='/' className='flex px-4 space-x-3 bg-green-400 rounded-br-full drop-shadow-2xl'>
                    <div className=''>
                        <Image src={SFLogo} width="40" height="45" alt="" />
                    </div>
                    <p className='text-4xl font-semibold pt-1  text-white'>BHS</p>
                </Link>
                <div className='flex items-center px-4'>
                        <div>
                            <Link href='/login' className='text-black p-2  font-medium'>Log In</Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader