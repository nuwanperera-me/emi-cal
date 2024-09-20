import { TbError404 } from "react-icons/tb";

export default function NotFoundPage() {
  return (
    <main className="relative w-full flex flex-col items-center justify-center text-center mt-40">
      <TbError404 className="w-32 h-32 md:w-96 md:h-96 text-zinc-700" />
      <h1 className="absolute bottom-2 md:bottom-14 font-mono font-semibold text-4xl md:text-8xl text-nowrap z-10">Not found</h1>
    </main>
  );
}
