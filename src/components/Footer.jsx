import PageContainer from "./PageContainer.jsx";

export default function Footer() {
  return (
    <footer className="mt-10 border-t">
      <PageContainer className="py-6 text-sm opacity-70">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </PageContainer>
    </footer>
  );
}
