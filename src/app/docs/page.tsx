export default function Docs() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <main className="flex flex-col items-center justify-center w-full max-w-4xl bg-white dark:bg-black rounded-xl shadow-lg p-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Bika Documentation</h1>
        <p className="text-lg text-center mb-8 text-gray-600 dark:text-gray-400">
          Learn how to use and customize the Bika platform to fit your business needs.
        </p>
        <div className="w-full space-y-6">
          <section className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h2 className="text-2xl font-semibold mb-3">Getting Started</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Learn the basics of setting up your Bika platform and getting it running for your business.
            </p>
          </section>
          <section className="border-b border-gray-200 dark:border-gray-700 pb-6">
            <h2 className="text-2xl font-semibold mb-3">API Documentation</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Integrate with our powerful API to extend the functionality of your Bika platform.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">Support</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Need help? Contact our support team or check our FAQ section for common questions.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}