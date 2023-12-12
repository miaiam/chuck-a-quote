import Image from "next/image";

export default function Home() {
  return (
    <main className="flex relative h-screen">
      <Image
        alt="Galaxy and landscape in neon purple and blue colors"
        src="/assets/galaxy.png"
        layout="fill"
        objectFit="cover"
      />
    </main>
  )
}
