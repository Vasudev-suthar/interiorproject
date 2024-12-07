import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'

export const Logo = () => {
  return (
    <Link href="/" >
        {/* <Image
        src={logo}
        width={160}
        height={55}
        alt=""
        className="h-[55px]"
         /> */}
         <p className="h-[55px] flex items-center font-extrabold uppercase text-primary mx-2 lg:mx-20 sm:mx-2">Home Interior</p>
    </Link>
  )
}
