import Sidebar from "@/components/Sidebar";
import DashboardCards from "@/components/DashboardCards";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />

      <div className="flex-1 bg-zinc-950 text-white min-h-screen p-8">
        <h1 className="text-4xl font-bold">
          Learning Dashboard
        </h1>

        <p className="text-zinc-400 mt-2">
          Welcome back, Harshit 👋
        </p>

        <DashboardCards />
      </div>
    </main>
  );
}