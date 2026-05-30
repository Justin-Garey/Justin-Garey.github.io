import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-primary text-secondary min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Page not found</h1>
        <p className="mb-6">The page you are looking for does not exist.</p>
        <Link href="/" className="underline">
          Go back home
        </Link>
      </div>
    </div>
  );
}
