import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-primary mb-4 animate-bounce">
          404
        </h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground shadow hover:bg-primary/90 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
