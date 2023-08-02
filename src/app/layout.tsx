import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import NavBar from "./components/NavBar";
import NavLink from "./section/Main/NavItems";
import NavColumn from "./components/global/NavColumn";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IOI - Isaac Ojo, Iyanuoluwa",
  authors:[{ name: "Ojo Isaac Iyanuoluwa", url: "https://isaacojo.me" }],
  description:
    "Hi, I’m Isaac Ojo, a fullstack developer with a knack for building awesome web and mobile apps. I use node.js, next.js, react, typescript, and react native to create solutions that are fast, beautiful, and reliable. I love learning new things and tackling new problems. I also enjoy working with other developers and sharing what I know. Whether it’s a personal project or a professional one, I always strive to deliver quality and value.",
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@hojoisaac",
    title: "Isaac Ojo Portfolio",
    images: "https://isaacojo.me/ioi-thumbnail.jpg",
  },
  openGraph:{
    type: "website",
    url: "https://isaacojo.me",
    title: "Isaac Ojo Portfolio",
    description: "Hi, I’m Isaac Ojo, a fullstack developer with a knack for building awesome web and mobile apps. I use node.js, next.js, react, typescript, and react native to create solutions that are fast, beautiful, and reliable. I love learning new things and tackling new problems. I also enjoy working with other developers and sharing what I know. Whether it’s a personal project or a professional one, I always strive to deliver quality and value.",
    siteName: "IOI",
    images: [{
      url: "https://isaacojo.me/ioi-thumbnail.jpg",
    }],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className}`}>
        <NavColumn />
        {children}
      </body>
    </html>
  );
}
