import Topbar from "@/components/landing-page/topbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="py-20 text-center">
        <h1 className="text-7xl">Bitty</h1>

        <div className="mt-10">
          <p className="text-3xl">A link shortener platform</p>
        </div>

        <Link href="/user/dashboard" className="cursor-pointer">
          <button className="cursor-pointer rounded-md border bg-neutral-900 px-5 py-3 text-gray-50 hover:bg-neutral-700">
            Dashboard
          </button>
        </Link>
      </div>
    </>
  );
}
