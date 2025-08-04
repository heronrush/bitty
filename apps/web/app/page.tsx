import Topbar from "@/components/landing-page/topbar";

export default function Home() {
  return (
    <>
      <Topbar />

      <Hero />
    </>
  );
}

function Hero() {
  return (
    <div className="h-130 mx-auto flex flex-col items-center bg-green-50">
      <h1 className="text-7xl">Bitty</h1>

      <h1 className="text-3xl italic">&apos;&apos;Shorten your links. Share smarter&apos;&apos;</h1>

      <h3 className="text-3xl">Simple, fast, and trackable URLs for individuals.</h3>
    </div>
  );
}
