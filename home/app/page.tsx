import "./globals.scss";
import HOMEPAGESTYLE from "./home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div id={HOMEPAGESTYLE["home-page-container"]}>
        <div id={HOMEPAGESTYLE["greeting"]}>
          <div id={HOMEPAGESTYLE["gradient-line-decoration"]}></div>
          <div id={HOMEPAGESTYLE["greeting-header"]}>
            <span id={HOMEPAGESTYLE["greeting-name"]}>Vincent Nguyen</span>
            <span id={HOMEPAGESTYLE["greeting-header-seperator"]}>/</span>
            <span id={HOMEPAGESTYLE["greeting-alias"]}>CentenV</span>
            <div id={HOMEPAGESTYLE["greeting-role"]}>
              <span className={`${HOMEPAGESTYLE["role"]}`}>Software Engineer & Developer</span>
              <span className={`${HOMEPAGESTYLE["role-divider"]}`}>/</span>
              <span className={`${HOMEPAGESTYLE["role"]}`}>Computer Science</span>
              <span className={`${HOMEPAGESTYLE["role-divider"]}`}>/</span>
              <span className={`${HOMEPAGESTYLE["role"]}`}>Undergraduate at Colorado School of Mines</span>
            </div>
          </div>

          
        </div>
        <div>
          {/* <Image src={"/images/portrait.JPG"} alt="Portrait" width={1647} height={2203} id={HOMEPAGESTYLE["greeting-image"]} draggable={false} /> */}
        </div>
      </div>
    </div>
  );
}