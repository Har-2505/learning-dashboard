export default function ActivitySection() {
  const activities = [
    "Completed React Basics lesson",
    "Started Next.js Fundamentals",
    "Finished JavaScript Quiz",
    "Watched UI Design tutorial",
  ];

  return (
    <div className="bg-zinc-900 p-6 rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-zinc-800 p-4 rounded-xl text-zinc-300"
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}