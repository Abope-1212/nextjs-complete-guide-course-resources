import { DUMMY_NEWS } from "@/dummy-news";

import NewsList from "@/components/news-list";

import Link from "next/link";

export default function NewPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
