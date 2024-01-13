import Link from "next/link";
import GitHubIcon from "./GitHubIcon";

export default function Header() {
  return (
    <header className="py-3 border-b border-neutral-700">
      <div className="w-[1000px] mx-auto flex items-center justify-between">
        <div>
          <Link className="text-xl font-medium" href="/">
            Blog.
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/publicaciones">Publicaciones</Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-3 bg-neutral-700 py-1 px-3 rounded-lg hover:bg-neutral-950"
                href="https://github.com/felipeB21/Nextjs-blog"
                target="_blank"
              >
                GitHub <GitHubIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
