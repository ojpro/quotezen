import quotes from "@/services/firebase";

// get a specific quote using the docuemnt id
export default async function handler(req, res) {
  const quoteId = req.query.id;
  // fetch quote by id
  const snapshot = quotes.doc(quoteId);
  const quote = await snapshot.get();

  // check if the quote exists
  if (!quote.exists) {
    res.status(404).send("Not Found");
    return;
  }

  // update quote
  if (req.method === "PUT" || req.method === "PATCH") {
    const requestData = req.query;
    const quoteData = quote.data();

    // check the categories before spliting them
    let categories =
      requestData.categories != null
        ? requestData.categories.split(",")
        : quoteData.categories;

    // send a create request
    await snapshot.set({
      quote: requestData.quote || quoteData.quote,
      author: requestData.author || quoteData.author,
      categories: categories,
    });

    // send a response
    res.send("Quote Updated!");

    // delete the quote
  } else if (req.method === "DELETE") {
    const response = await snapshot.delete();
    res.send("Quote deleted!");
  } else {
    // otherwise return quote object
    res.setHeader("Content-Type", "application/json");
    res.json(quote.data());
  }
}
