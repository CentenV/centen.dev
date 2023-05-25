"use client";

import { use, useEffect, useState } from "react";
import SPLASHSCREENSTYLE from "./splashscreen.module.scss";
import Image from "next/image";

export default function SplashScreen() {
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        setTimeout(() => {setDisplay(false)}, 1001)
    }, [])

    if (!display) {
        return null;
    }

    return (display &&
        (<div id={SPLASHSCREENSTYLE["splash-screen-container"]}>
            <Image src="/icons/styledlogo.svg" alt="CentenV" width={250} height={250} id={SPLASHSCREENSTYLE["splash-logo"]} draggable={false} />
        </div>)
    );
}