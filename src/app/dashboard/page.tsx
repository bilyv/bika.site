export default function Dashboard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <main className="flex flex-col items-center justify-center w-full max-w-4xl bg-white dark:bg-black rounded-xl shadow-lg p-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Bika Dashboard</h1>
        <p className="text-lg text-center mb-8 text-gray-600 dark:text-gray-400">
          Welcome to your Bika dashboard. Manage your business efficiently with our powerful tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Analytics</h2>
            <p>Track your business performance</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Users</h2>
            <p>Manage your user accounts</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Settings</h2>
            <p>Configure your platform</p>
          </div>
        </div>
      </main>
    </div>
  );
}