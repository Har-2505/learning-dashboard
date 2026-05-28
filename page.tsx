import Sidebar from "@/components/Sidebar";
import DashboardCards from "@/components/DashboardCards";
import CourseProgress from "@/components/CourseProgress";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Learning Dashboard
          </h1>
          <p className="text-zinc-400 mt-2">
            Welcome back 👋
          </p>
        </div>

        {/* Cards */}
        <DashboardCards />

        {/* Progress */}
        <CourseProgress />

      </main>
    </div>
  );
}