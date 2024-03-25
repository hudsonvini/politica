import styles from "./bannerOne.module.css";

// This component represents a banner section
export function BannerOne(props) {
  // The property imageBannerOne is extracted from the props object.
  const { imageBannerOne } = props;
  return (
    <section
      className={styles.container} // This section has a CSS class 'container' which is defined in a CSS styles module imported as 'styles'.
      style={{
        // The section also has inline CSS styles applied to it.
        backgroundImage: imageBannerOne ? `url(${imageBannerOne})` : null,
        backgroundColor: imageBannerOne ? null : "var(--amarelo-home)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></section>
  );
}
