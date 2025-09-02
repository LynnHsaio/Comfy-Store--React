import styles from "./About.module.scss";

export default function About() {
  return (
    <>
      <h1>
        <span className="text-6xl">We love </span>
        <span className={styles.textPrimary}>comfy</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </>
  );
}
