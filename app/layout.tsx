"use client";

import './globals.scss'
import SplashScreen from "./splashscreen/splashscreen";
import LAYOUTSTYLE from "./layout.module.scss";
import { Montserrat } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


// Import Montserrat
export const MONTSERRAT = Montserrat({
  variable: '--default-font',
  subsets: ["latin"],
  display: "swap"
});


// Site
export const metadata = {
  title: 'CentenV',
  description: 'Generated by create next app',
}
export default function RootLayout({children}: {children: React.ReactNode}) {
  // Display Content After Splash Screen
  const [displayPage, setDisplayPage] = useState(false);
  useEffect(() => {
    setTimeout(() => {setDisplayPage(true)}, 1000);
  }, [])

  // Prevent Right Click
  const preventRightClick = (e: any) => {
    e.preventDefault()
  }

  return (
    <html lang="en">
      <style jsx global>{`
        :root {
          --default-font: ${MONTSERRAT.style.fontFamily}
        }
      `}</style>
      {/* onContextMenu={preventRightClick} */}
      <body suppressHydrationWarning={true}>
        {/* Splash Screen */}
        <SplashScreen />
        {/* Content */}
        {displayPage && (<div id="page">
          <LayoutNavigationBar />
          <div id="content">{children}</div>
        </div>)}
      </body>
    </html>
  )
}

// Layout Navigation Bar
function LayoutNavigationBar() {
  const router = useRouter();

  return (
    <nav id={LAYOUTSTYLE["layout"]}>
      <div id={LAYOUTSTYLE["logo-container"]}>
        <Image src="/icons/fulllogo.svg" alt="CentenV | Vincent Nguyen" width={300} height={50} id={LAYOUTSTYLE["logo"]} draggable={false} onClick={() => router.push("/")} />
      </div>
      <div id={LAYOUTSTYLE["page-selection-container"]}>
        <Link href={"/projects"} className={`${LAYOUTSTYLE["page"]}`}>PROJECTS / GALLERY</Link>
        <Link href={"/experience"} className={`${LAYOUTSTYLE["page"]}`}>EXPERIENCE</Link>
        <Link href={"/skills"} className={`${LAYOUTSTYLE["page"]}`}>SKILLS</Link>
        <Link href={"/education"} className={`${LAYOUTSTYLE["page"]}`}>EDUCATION</Link>
        <Link href={"/about"} className={`${LAYOUTSTYLE["page"]}`}>ABOUT</Link>
      </div>
    </nav>
  );
}