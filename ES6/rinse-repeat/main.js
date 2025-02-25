//Fetch

async function getrandomAPI() {
  const url = "https://example.org/products.json";

  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error(`Response status: ${Response.status}`);
    }

    const json = await reponse.json();
    console.log(json);
  } catch (error) {
    console.log(error.message);
  }
}
