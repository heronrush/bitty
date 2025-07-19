"use client";

import DashboardTopbar from "@/components/dashboard/dashboard-topbar";
import LinkContainer from "@/components/dashboard/link-container";
import LinkCreationModal from "@/components/dashboard/link-creation-modal";
import { displayModalAtom } from "@/store/atoms/modalAtom";
import { useAtomValue } from "jotai";

export default function DashboardPage() {
  const modalIsDisplayed = useAtomValue(displayModalAtom);

  return (
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
  );
}
