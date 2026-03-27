import { Container, Section } from "components";
import React, { FC } from "react";

import { ContactForm } from "../ContactForm";

export const Contact: FC = () => {
  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={"Wanna reach out?"}
      description={
        "Feel free to drop me a message if you have some interesting offer or you want to hang out."
      }
    >
      <Container>
        <ContactForm />
      </Container>
    </Section>
  );
};
