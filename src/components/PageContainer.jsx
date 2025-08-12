export default function PageContainer({ className = "", children }) {
  return (
    <div
      className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
