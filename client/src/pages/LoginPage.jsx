import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-16">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form action="" className="max-w-2xl mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
          <div className="text-gray-500 text-center py-2">
            Don't have an account? <Link className="text-blue-600" to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
