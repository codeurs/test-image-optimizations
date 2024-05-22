import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Simple test repo to check how often these images are counted towards the
        image optimization usage
      </h1>
      <Image src="/fixed.jpg" width={4032} height={3024} className="w-96" />
      <div className="relative w-96 h-64">
        <Image src="/fill.jpg" fill />
      </div>
    </main>
  )
}
