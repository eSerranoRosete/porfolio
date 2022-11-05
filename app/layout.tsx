import Footer from "../components/Footer";
import NavBar from "../components/navigation/NavBar";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="bg-black">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
