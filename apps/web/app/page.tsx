import ShrinkButton from "@/components/shrink-button";
import LongURLInput, { InvalidUrlWarning } from "@/components/long-url-input";
import ShortURLInput from "@/components/short-url-input";
import CopyShortURLButton from "@/components/copy-short-url-button";

export default function Home() {
  return (
    <>
      <div className="text-center py-20">
        <h1 className="text-7xl">Bitty</h1>

        <div className="mt-10">
          <p className="text-3xl">A link shortener platform</p>
        </div>

        <p className="text-3xl my-5">Paste your long URL and shrink it</p>

        {/* this div contains the original url input and the button */}
        <div className="mt-10 flex text-center justify-center">
          <LongURLInput />
          <ShrinkButton />
        </div>

        {/* this shows when the url is invalid */}
        <InvalidUrlWarning />

        {/* this div contains the shortened url and a button to copy it */}
        <div className="mt-5">
          <ShortURLInput />
          <CopyShortURLButton />
        </div>
      </div>
    </>
  );
}
