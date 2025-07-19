import axios from 'axios';
import { notFound, redirect } from 'next/navigation';

type LinkType = {
  params: {
    link: string;
  };
};

export default async function ShortUrlPage({ params }: LinkType) {
  const { link } = await params;

  const longUrl = await axios.post(`http://localhost:3002/${link}`);

  if (longUrl.data.originalURL) {
    return redirect(longUrl.data.originalURL);
  } else {
    notFound();
  }
}
