import { useEffect } from "react";
import ContactPage from "../components/contact-page-component/contact-page";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Lot8";
  }, []);
  return (
    <div className="overflow-hidden">
      <ContactPage />
    </div>
  );
};

export default Contact;
