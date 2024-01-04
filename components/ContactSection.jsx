import {
  Heading,
  SubHeading,
  ContactForm,
  ConnectSection,
  Divider,
} from "./Export";

const ContactSection = ({ serviceId, templateId, publicApiKey }) => {
  return (
    <section>
      <Heading text="Contact Me!" />
      <SubHeading text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid eveniet voluptate, beatae ipsam quae exercitationem." />
      <ContactForm
        serviceId={serviceId}
        templateId={templateId}
        publicApiKey={publicApiKey}
      />
      <Divider />
      <ConnectSection />
    </section>
  );
};

export default ContactSection;
