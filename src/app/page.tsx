export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            SimRC
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
            FPV Simulation RC
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Welcome to the FPV Simulation RC platform. Experience immersive first-person view drone simulation and remote control.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚁</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Realistic Physics
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Experience true-to-life drone flight dynamics and physics simulation
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📡</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Remote Control
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Full RC transmitter support with customizable controls
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎮</div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                FPV Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Immersive first-person view with realistic camera simulation
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors text-lg">
              Get Started
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
