"use client";

import DashboardTopbar from "@/components/dashboard/dashboard-topbar";
import LinkContainer from "@/components/dashboard/link-container";
import LinkCreationModal from "@/components/dashboard/link-creation-modal";
import { displayModalAtom } from "@/store/atoms/modalAtom";
import { userIdAtom } from "@/store/atoms/urlAtom";
import { useAtom, useAtomValue } from "jotai";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const modalIsDisplayed = useAtomValue(displayModalAtom);
  const session = useSession();

  const [userId, setUserId] = useAtom(userIdAtom);

  setUserId(session.data?.user?.userId);

  return (
    <>
      <p>{JSON.stringify(session.data?.user)}</p>
      <p>{userId}</p>
      <div className="rounded-sm text-center">
        {modalIsDisplayed ? (
          <LinkCreationModal />
        ) : (
          <>
            <DashboardTopbar />
            <LinkContainer />
          </>
        )}
      </div>
    </>
  );
}
