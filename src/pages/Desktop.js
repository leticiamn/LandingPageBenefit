import Footer from "../components/Footer";
import FormSection from "../components/FormSection";
import Contato from "../components/Contato";
import HistorySection from "../components/HistorySection";
import AboutSection from "../components/AboutSection";
import SocialSection from "../components/SocialSection";
import BenefitsSection from "../components/BenefitsSection";
import Section from "../components/Section";
import ServicesSection from "../components/ServicesSection";
import HeaderSection from "../components/HeaderSection";
import styles from "./Desktop.module.css";
import SmallFooter from "../components/SmallFooter";

const Desktop = () => {

  return (
    <div className={styles.desktop}>
      <HeaderSection />
      <ServicesSection />
      <Section />
      <BenefitsSection />
      <SocialSection />
      <AboutSection />
      <HistorySection />
      <Contato />
      <FormSection />
      <Footer />
      <SmallFooter />

    </div>
  );
};

export default Desktop;
