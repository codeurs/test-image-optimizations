import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Simple test repo to check how often these images are counted towards the
        image optimization usage
      </h1>
      <Image
        src="/fixed.jpg"
        width={4032}
        height={3024}
        className="w-96 border-black border-2"
        alt="Trees"
      />
      <div className="relative w-96 h-64 border-black border-2">
        <Image src="/fill.jpg" fill alt="Trees" />
      </div>
      <hr></hr>
      <Image
        src="/fixed-full.jpg"
        width={6720}
        height={4480}
        className="w-full border-black border-2"
        alt="Trees"
      />
      <div className="relative w-full h-64 border-black border-2">
        <Image src="/fill-full.jpg" fill alt="Trees" objectFit="cover" />
      </div>
    </main>
  )
}
