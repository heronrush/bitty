"use client";

import { useAtom, useAtomValue } from "jotai";
import Link from "./link";
import { LinkType, userIdAtom, userLinksAtom } from "@/store/atoms/urlAtom";
import { useEffect } from "react";
import axios from "axios";

export default function LinkContainer() {
  const [links, setLinks] = useAtom<LinkType[]>(userLinksAtom);
  const userId = useAtomValue(userIdAtom);

  async function fetchLinks(userId: number) {
    const response = await axios.get(`http://localhost:3002/api/user/${userId}/links`);

    console.log("----------------------");
    console.log(response.data.links);
    console.log("----------------------");

    return response.data.links;
  }

  useEffect(() => {
    if (!userId) {
      return;
    }

    const fetchUserLinks = async () => {
      const links = fetchLinks(userId);

      setLinks(links);
    };

    fetchUserLinks();
  }, [userId]);

  console.log(userId);
  console.log(links);

  return (
    <div className="mx-2 mb-5 mt-4 h-full rounded-sm border border-gray-300 bg-[#f5f0f0] py-20">
      <div className="flex flex-col items-center">
        {links.length > 0 ? (
          links.map((link) => {
            return <Link key={link.id} originalUrl={link.originalURL} shortUrl={link.shortURL} />;
          })
        ) : (
          <p className="text-3xl font-semibold">No links yet. Create some</p>
        )}
      </div>
    </div>
  );
}
