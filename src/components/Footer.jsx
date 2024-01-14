import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 bg-neutral-700 border-t border-neutral-600 mt-12 static bottom-0 w-full">
      <div className="w-[1000px] mx-auto flex items-center justify-between">
        <div>
          <Link className="text-xl font-medium" href="/">
            Blog.
          </Link>
          <p className="text-sm text-gray-400">bolgarfelipe@gmail.com</p>
        </div>
        <div>
          <Link
            className="hover:underline"
            href="https://github.com/felipeB21"
            target="_blank"
          >
            GitHub
          </Link>
          <p className="text-sm text-gray-400">
            El blog de un programador © 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
