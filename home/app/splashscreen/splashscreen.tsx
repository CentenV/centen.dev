"use client";

import { useEffect, useState } from "react";
import SPLASHSCREENSTYLE from "./splashscreen.module.scss";
import Image from "next/image";


/////////////////////////////
// Splash Screen Component //
/////////////////////////////
export default function SplashScreen({ children }: {children: React.ReactNode}) {
    const [displaySplashScreen, setDisplaySplashScreen] = useState(true);

    useEffect(() => {
        setTimeout(() => {setDisplaySplashScreen(false)}, 1001)
    }, []);

    return (displaySplashScreen ?
        (<div id={SPLASHSCREENSTYLE["splash-screen-container"]}>
            <Image src="/icons/styledlogo.svg" alt="CentenV" width={250} height={250} id={SPLASHSCREENSTYLE["splash-logo"]} draggable={false} />
        </div>)
        :
        (<div id="page">
            <div id="content">
                {children}
            </div>
        </div>)
    );
}