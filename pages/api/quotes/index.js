import quotes from "@/services/firebase"

// Get all the quotes
export default async function handler(req, res) {
  let allQuotes = [];
  // fetch all the quotes
  const snapshot = await quotes.get();
  // push the quotes
  snapshot.forEach((quote) => {
    allQuotes.push(quote.data());
  });
  // response with all the quotes
  res.status(200).json(allQuotes);
}
