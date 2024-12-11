import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-linear-to-t from-[hsl(40,58%,8%)] via-[hsl(40,58%,14%)] to-[hsl(40,58%,28%)] text-[hsl(40,58%,80%)] md:items-center md:justify-center">
      <div className="flex flex-col gap-8 px-4 pt-12 md:items-center md:justify-center">
        <h1 className="border-b border-[hsl(40,58%,40%)] pt-8 pb-3 text-3xl tracking-wide text-[hsl(40,58%,80%)] md:-mt-24">
          simple <span className="text-[hsl(40,58%,40%)]">handpan </span> app
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid sm:grid-cols-2 md:gap-8">
          <Link
            className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="#"
          >
            <h3 className="text-xl font-bold">Handpan layouts →</h3>
            <div className="">Handcrafted handpan layouts.</div>
          </Link>
          <Link
            className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="#"
          >
            <h3 className="text-xl font-bold">Handpan makers →</h3>
            <div>Are you a handpan maker?</div>
          </Link>
        </div>
      </div>
    </main>
  );
}
