import { AuthProvider } from "./Providers";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles-globals/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Boss-PlayGround",
  description: "Boss-PlayGround",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
        
      </body>
    </html>
  );
}
