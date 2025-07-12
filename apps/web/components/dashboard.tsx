import { LINKS, LinkType } from "@/data/links";
import Link from "./link";
import CreateLinkButton from "./create-link-button";

export default function DashboardMainView() {
  return (
    <div className="border-x border-t border-gray-500 rounded-md h-screen w-full m-5">
      <div className="border-b p-6 flex justify-end">
        <CreateLinkButton />
      </div>

      <LinkContainer links={LINKS} />
    </div>
  );
}

function LinkContainer({ links }: { links: LinkType[] }) {
  // if there are no links created then this dynamic variable is rendered
  let content = (
    <p className="text-3xl flex flex-col items-center h-full justify-center">
      No links yet
    </p>
  );
  if (links.length > 0) {
    content = (
      <div>
        {links.map((link) => (
          <Link
            key={link.id}
            originalURL={link.originalURL}
            shortURL={link.shortURL}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="p-5 rounded-md m-4 h-[600px] text-center">{content}</div>
  );
}
