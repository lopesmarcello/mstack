import Link from "next/link";
import { SimulateErrorButton } from "./components/simulateError";
import { formatName } from "@/common/utils/formatName";

export default async function NamePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;
  if (!name) return <></>;

  const formattedName = formatName(name);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen w-screen">
      <p className="text-4xl font-bold text-white/90">
        Hello, {formattedName}!
      </p>
      <SimulateErrorButton name={formattedName} />
      <Link href={"/"}>
        <p className="text-white/50 text-md pt-4 underline underline-offset-2">
          RETURN
        </p>
      </Link>
    </div>
  );
}
