import GenerateShortLinkButton from "../generate-short-url-button";
import LongURLInput from "../long-url-input";
import ModalCloseIcon from "./modal-close-icon";

export default function LinkCreationModal() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/* backdrop */}
      {/* <div className="absolute -z-10 h-full w-full bg-black backdrop-opacity-5"></div> */}
      <div className="flex h-3/4 w-2/4 flex-col items-center justify-center rounded-md border border-gray-300 px-20 py-20 shadow-md">
        <div className="bottom-43 left-86 relative">
          <ModalCloseIcon />
        </div>

        <p className="bottom-30 relative text-2xl font-semibold">
          Paste a long-URL and generate a short-URL for it
        </p>

        <div className="relative bottom-10">
          <p className="w-120 mb-0.5 text-left font-semibold">Destination URL</p>
          <LongURLInput />
        </div>

        <div className="relative bottom-10">
          <GenerateShortLinkButton />
        </div>
      </div>
    </div>
  );
}
