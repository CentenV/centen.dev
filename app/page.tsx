import "./globals.scss";
import HOMEPAGESTYLE from "./home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div id={HOMEPAGESTYLE["home-page-container"]}>
        <div id={HOMEPAGESTYLE["greeting"]}>
          <div>
            CentenV
            Vincent Nguyen
          </div>
          <div>
            <Image src={"/images/portrait.JPG"} alt="Portrait" width={1647} height={2203} id={HOMEPAGESTYLE["greeting-image"]} draggable={false} />
          </div>
        </div>
      </div>
      
    </div>
  );
}