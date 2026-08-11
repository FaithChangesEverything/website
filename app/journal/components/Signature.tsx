import Image from "next/image";
import styles from "../page.module.css";

export default function Signature() {
  return (
    <section className={styles.signature}>

      <p className={styles.closing}>
        Grace and peace,
      </p>

      <div className={styles.signatureBlock}>

  <div className={styles.signatureGraphic}>
    <Image
      src="/journal/assets/signature.png"
      alt="Pastor Richard Ball Signature"
      width={2067}
      height={761}
      priority
    />
  </div>

  <div className={styles.signatureInfo}>
          <div className={styles.pastorName}>
            Pastor Richard Ball
          </div>

          <div className={styles.title}>
            Founder & Pastor
          </div>

          <div className={styles.ministryName}>
            Faith Changes Everything
          </div>
        </div>

      </div>

    </section>
  );
}