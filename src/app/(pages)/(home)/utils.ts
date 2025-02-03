export async function sendName(name: string) {
  const response = fetch("/api/name", {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  return response;
}
