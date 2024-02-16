import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <h1 className={styles.hero_title}>Pricing & Plans</h1>
      <p className={styles.hero_description}>
        With lots of unique blocks, you can easily build a page without coding.
        Build your next consultancy website within few minutes.
      </p>
    </section>
  );
};

export default Hero;
