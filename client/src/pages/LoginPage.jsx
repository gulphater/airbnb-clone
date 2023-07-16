export default function LoginPage() {
  return (
    <div>
      <h1 className="text-xl text-center mb-4">Login</h1>
      <form action="" className="max-w-2xl mx-auto">
        <input type="email" placeholder="your@email.com" />
        <input type="password" placeholder="password" />
        <button className="primary">Login</button>
      </form>
    </div>
  );
}
