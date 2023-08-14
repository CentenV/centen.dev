import "./globals.scss";
import HOMEPAGESTYLE from "./home.module.scss";
import Image from "next/image";


/////////////////////////
// Home Page Component //
/////////////////////////
export default function Home() {
  return (
    <div>
      <div id={HOMEPAGESTYLE["home-page-container"]}>
        <div id={HOMEPAGESTYLE["greeting"]}>
          <div id={HOMEPAGESTYLE["gradient-line-decoration"]}></div>
          <div id={HOMEPAGESTYLE["greeting-header"]}>
            <div id={HOMEPAGESTYLE["greeting-names"]}>
              <div>
                <span id={HOMEPAGESTYLE["name"]}>Vincent Nguyen</span>
                <span id={HOMEPAGESTYLE["greeting-eol"]}>\</span>
              </div>
              <div>
                <span id={HOMEPAGESTYLE["alias"]}>CentenV</span>
                <span id={HOMEPAGESTYLE["greeting-eol"]}>\</span>
              </div>
            </div>
            <div id={HOMEPAGESTYLE["greeting-role"]}>
              <div>
                <span className={`${HOMEPAGESTYLE["role"]}`}>Software Engineer & Developer</span>
                <span className={`${HOMEPAGESTYLE["role-eol"]}`}>\</span>
              </div>
              <div>
                <span className={`${HOMEPAGESTYLE["role"]}`}>Computer Science</span>
                <span className={`${HOMEPAGESTYLE["role-eol"]}`}>\</span>
              </div>
              <div>
                <span className={`${HOMEPAGESTYLE["role"]}`}>Undergraduate @ Colorado School of Mines</span>
                <span className={`${HOMEPAGESTYLE["role-eol"]}`}>\</span>
              </div>
            </div>
          </div>

          
        </div>
        <div>
          {/* <Image src={"/images/portrait.JPG"} alt="Portrait" width={1647} height={2203} id={HOMEPAGESTYLE["greeting-image"]} draggable={false} /> */}
          Coming soon.
        </div>
      </div>
    </div>
  );
}