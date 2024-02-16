import "./globals.css";
import Header from "./components/Header/Header";

export const metadata = {
  title: "Brainwave.io",
  description: "Brainwave.io design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
