import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-8 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">
            Get in touch
          </h2>
          <a
            href="mailto:berealpha1@gmail.com"
            className="text-sm font-serif italic hover:text-white transition-colors"
          >
            berealpha1@gmail.com
          </a>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-8 text-gray-500 text-[10px] uppercase tracking-widest">
          {/* <a
            href="https://x.com/yoabadam"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            X
          </a> */}
          <a
            href="https://www.linkedin.com/in/bek3113/"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/beki-6"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://beki-123.substack.com"
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Substack
          </a>
        </div>

        {/* Right: Signature */}
        <div className="flex items-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-light">
            Powered by{" "}
            <Link
              href="https://moonastudio.build.et"
              target="_blank"
              className="text-white/40 hover:text-white transition-colors ml-1"
            >
              MoonaStudio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
