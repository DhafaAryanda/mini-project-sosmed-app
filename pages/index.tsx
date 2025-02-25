import { Button } from '@/components/ui/button'
import { Geist, Geist_Mono } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

import { useTheme } from 'next-themes'

export default function Home() {
  return (
    <>
      <div className="bg-red-500 flex gap-5">
        <Button>Click me</Button>
        <Button>Button</Button>
      </div>
    </>
  )
}
