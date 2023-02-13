import Head from "next/head"
import QuoteCard from "@/components/Cards/quote"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Varela+Round&display=swap" rel="stylesheet" />

      <title>QuoteZen - Web App</title>
      </Head>
      <QuoteCard></QuoteCard>
    </>
  )
}