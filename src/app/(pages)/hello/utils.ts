export async function getHello() {
  const response = fetch("/api/test", { method: "GET" })
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return response;
}
