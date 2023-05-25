import SPLASHSCREENSTYLE from "./splashscreen.module.scss";
import Image from "next/image";

export default function SplashScreen() {
    return (
        <div id={SPLASHSCREENSTYLE["splash-screen-container"]}>
            <Image src="/icons/styledlogo.svg" alt="CentenV" width={250} height={250} id={SPLASHSCREENSTYLE["splash-logo"]} draggable={false} />
        </div>
    );
}