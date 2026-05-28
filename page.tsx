import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />

      <div className="flex-1 p-10 bg-zinc-950 text-white min-h-screen">
        <h1 className="text-4xl font-bold">
          Learning Dashboard
        </h1>

        <p className="mt-4 text-zinc-400">
          Welcome back, Harshit 👋
        </p>
      </div>
    </main>
  );
}