export default function PageContainer({ className = "", children }) {
  return (
    <div className={`w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
