import Image from 'next/image'
import styles from './page.module.css'
import Script from 'next/script';

const wikiPageLink: string = "https://centenv-wiki.super.site/";

export default function Wiki() {
  return (
    <main>
      <iframe src={wikiPageLink} id="wiki"></iframe>
      {/* <object data={wikiPageLink} width="500" height="500">
        <embed src={wikiPageLink} width="500" height="500"></embed>
      </object> */}
    </main>
  );
}
