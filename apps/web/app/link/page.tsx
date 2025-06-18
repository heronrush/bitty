import LinkInput from "@/components/link-input";

export default function LinkShortenerPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <p className="text-2xl mb-5 mr-20">
        Paste your link below and shorten it
      </p>
      <LinkInput />
    </div>
  );
}
