import Image from "next/image";
import Quote from "./components/quote";

export default function Home() {
  return (
    <main className="grid md:grid-cols-2 h-screen gap-4">
      <div className="relative">
        <Image
          alt="Galaxy and landscape in neon purple and blue colors"
          src="/assets/galaxy.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Quote />
    </main>
  )
}
