import Footer from "../components/Footer";
import NavBar from "../components/navigation/NavBar";
import { AnalyticsWrapper } from "../components/analytics";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="bg-black">
        <NavBar />
        {children}
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
