import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-500">
          Erreur 404
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900">
          Cette page n&apos;existe pas.
        </h1>
        <Link
          className="mt-8 inline-flex rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          to="/"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
