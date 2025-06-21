import axios from "axios";
import { notFound, redirect } from "next/navigation";
// import { redirect } from "next/navigation";

type ShortUrlType = {
  params: {
    link: string;
  };
};

export default async function URLRedirectPage({ params }: ShortUrlType) {
  const { link } = await params;

  const response = await axios.post(`http://localhost:3002/${link}`);

  if (response.status === 200) {
    redirect(response.data.originalURL);
  } else if (response.status === 404) {
    notFound();
  }

  return <div>hi</div>;
}
