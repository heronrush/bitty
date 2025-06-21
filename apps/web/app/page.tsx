import TopBar from "@/components/topbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <TopBar />

      <div>
        <p>Create a short link</p>

        <Button>
          <Link href="/shorten">LINK</Link>
        </Button>
      </div>
    </>
  );
}
