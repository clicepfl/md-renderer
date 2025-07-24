import { Inter } from "next/font/google";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "@/styles/Md.module.css";

const inter = Inter({ subsets: ["latin"] });

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ url: string }>;
}) {
  const url = (await searchParams).url;

  return (
    <div className={styles.md}>
      <Markdown remarkPlugins={[remarkGfm]}>
        {await fetch(url).then((r) => r.text())}
      </Markdown>
    </div>
  );
}
