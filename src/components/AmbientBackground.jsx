const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0B0F17]">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-40" />
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] bg-cyan-500/20 rounded-full blur-3xl animate-blob-delayed" />
      <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] bg-indigo-500/10 rounded-full blur-3xl animate-blob" />
    </div>
  );
};

export default AmbientBackground;
