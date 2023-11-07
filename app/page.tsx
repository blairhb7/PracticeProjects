import Image from 'next/image'
import Link from 'next/link'
import Todo from './Todo-list/page'
import Nav from './Component/Nav'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <Nav/>
      <ul className=" flex gap-4">
        <Link href={'/Todo-list'}><li className=" bg-emerald-500 px-5 text-white rounded-lg text-3xl">Todo List</li></Link>
        <Link href={''}><li className="bg-blue-500 px-5 text-white rounded-lg text-3xl">Fetching Data</li></Link>
        <Link href={''}><li className="bg-orange-500 px-5 text-white rounded-lg text-3xl">Next Project</li></Link>
      </ul>
    </main>
  )
}
