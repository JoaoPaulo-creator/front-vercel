import { getData } from "@/get-data/get-data"


export default async function Home() {
  const message = await getData()
  console.log(message)

  return (
    <div className="text-3xl justify-center items-center flex h-screen">{message}</div>
  )
}
