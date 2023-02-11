import quotes from "@/services/firebase";

// Create new quote
export default async function handler(req, res) {
  let requestData = req.query;

  // check the request data
  if (
    requestData.quote != "" ||
    requestData.author != "" ||
    requestData.categories != ""
  ) {
    // send a create request
    await quotes.doc().set({
      quote: requestData.quote,
      author: requestData.author,
      categories: requestData.categories.split(","),
    });

    // send a response
    res.send("New Quote Added!");
  }
}
