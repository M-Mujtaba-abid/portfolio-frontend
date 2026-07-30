const Footer = () => {
  return (
    <footer className="relative border-t border-slate-800/60 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} Muhammad Mujtaba Abid. All rights
          reserved.
        </p>
        {/* <p className="font-mono text-xs">Built with Next.js-style architecture · Tailwind · Framer Motion</p> */}
      </div>
    </footer>
  );
};

export default Footer;
