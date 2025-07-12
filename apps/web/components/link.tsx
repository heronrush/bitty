import { Button } from "@/components/ui/button";

type LinkComponentType = {
  originalURL: string;
  shortURL: string;
};

export default function Link({ originalURL, shortURL }: LinkComponentType) {
  return (
    <div className="flex justify-between border py-6 px-2 rounded-md mb-4 hover:cursor-pointer hover:bg-gray-100">
      <div className="bg-red-50 flex flex-col">
        <p className="font-semibold">{shortURL}</p>
        <p className="text-sm ml-5">{originalURL}</p>
      </div>

      <DeleteButton />
    </div>
  );
}

export function DeleteButton() {
  return <Button variant="destructive">Delete Link</Button>;
}
