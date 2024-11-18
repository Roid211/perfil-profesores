import { FC } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'
import SignIn from '@/components/SignIn'


const page: FC = () => {
  return <div className='absolute inset-0'>
    <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-2'>
        <SignIn/>
    </div>
  </div>
}

export default page