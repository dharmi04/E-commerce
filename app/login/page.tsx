export default function login() {
    return (
      <div className="flex h-screen">
        {/* Left Side: App Info */}
        <div className="w-1/2 bg-primary text-white flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold mb-4">Pen & Papers</h1>
          <p className="text-lg text-gray-200">
            Welcome back! Log in to continue your journey.
          </p>
        </div>
  
        {/* Right Side: Login Form */}
        <div className="w-1/2 flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form className="flex flex-col gap-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  