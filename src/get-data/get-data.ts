export async function getData() {
  const response = await fetch(
    "https://expressjs-vercel-beta.vercel.app/teste"
  );
  const { message } = await response.json();
  return message;
}
