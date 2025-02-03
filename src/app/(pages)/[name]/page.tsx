import { Hello } from "./components/hello";

export default async function NamePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;
  if (!name) return <></>;
  return <Hello name={name} />;
}
