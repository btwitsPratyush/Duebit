import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-slate-400 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Button asChild className="bg-red-700 hover:bg-red-800">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
