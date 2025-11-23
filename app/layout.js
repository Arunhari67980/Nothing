import AnimationProvider from "./animation-provider";
import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Advanced portfolio created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}