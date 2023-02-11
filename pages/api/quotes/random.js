import quotes from "@/services/firebase";

// Fetch a random quote
export default async function handler(req, res) {
  //fetching random quote
  await quotes.get().then((snapshot) => {
    let random = Math.floor(Math.random() * snapshot.docs.length);
    let quote = snapshot.docs[random].data();
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    res.json(quote);
  });
}
