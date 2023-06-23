import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">
          Learning Next app router
        </h1>
        <Link href={"/about"}>Go to about</Link>
      </div>
    </main>
  );
}
