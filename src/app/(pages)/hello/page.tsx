import { HelloLoader } from "./components/HelloLoader";

export default function Hello() {
  return (
    <div className="flex h-screen w-screen items-center justify-center flex-col bg-slate-950">
      <h2 className="text-4xl tracking-tighter font-bold">mStack</h2>
      <p>Next.JS starter project</p>
      <HelloLoader />
    </div>
  );
}
