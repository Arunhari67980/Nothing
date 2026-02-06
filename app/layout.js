import AnimationProvider from "./animation-provider";
import "./globals.css";
import MiniArunChat from "../components/MiniArunChat";
import StructuredData from "../components/StructuredData";
import GlobalBackgroundProvider from "../components/GlobalBackgroundProvider";
import TargetCursor from "../components/TargetCursor";


export const metadata = {
  title: "Arun's Portfolio | Full Stack Developer",
  description: "Explore my portfolio showcasing innovative projects, technical expertise, and creative solutions in web development.",
  keywords: "portfolio, developer, projects, web development",
  authors: [{ name: "Arun" }],
  creator: "Arun",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arun-portfolio.com",
    siteName: "Arun's Portfolio",
    title: "Arun's Portfolio | Full Stack Developer",
    description: "Explore my portfolio showcasing innovative projects, technical expertise, and creative solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun's Portfolio | Full Stack Developer",
    description: "Explore my portfolio showcasing innovative projects, technical expertise, and creative solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="bg-black text-white">
        <TargetCursor />
        <GlobalBackgroundProvider>
          <AnimationProvider>
            {children}
          </AnimationProvider>
        </GlobalBackgroundProvider>
        <MiniArunChat />

      </body>
    </html>
  );
}