import Link from "next/link";
import HamburgerIcon from "./hamburger-icon";
import CreateLinkButton from "./create-link-button";
import { LogoutButton } from "../buttons";

export default function DashboardTopbar() {
  return (
    <div className="z-10 mx-2 mt-2 flex items-center justify-between rounded-sm border border-gray-300 px-10 py-3">
      <p className="text-3xl font-semibold text-[#30221c]">
        <Link href="/">Bitty</Link>
      </p>

      <div className="flex items-center gap-14 align-middle">
        <CreateLinkButton />
        <LogoutButton />

        {/* <HamburgerIcon /> */}
      </div>
    </div>
  );
}
