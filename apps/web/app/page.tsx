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
    <div className="h-130 flex flex-col items-center justify-center bg-amber-50">
      <h1 className="text-7xl">Bitty</h1>

      <h1 className="mt-5 text-3xl italic">
        &apos;&apos;Shorten your links. Share smarter&apos;&apos;
      </h1>

      <h3 className="mt-5 text-3xl">Simple, fast, and trackable URLs for individuals.</h3>
    </div>
  );
}
