export default function About() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Welcome to our website! We&apos;re dedicated to creating exceptional web
            applications using cutting-edge technologies like Next.js.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our mission is to deliver user-friendly, responsive, and fast
            applications to enhance user experiences and meet modern web
            standards. With a focus on performance and design, we strive to
            provide the best solutions for our users and clients.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Thank you for visiting! Feel free to explore and learn more about us.
          </p>
        </div>
      </div>
    );
  }