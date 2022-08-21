import { Container, Section } from "components";
import React, { FC } from "react";

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
        <div className="mt-4">
          <a
            href="mailto:hello@tarunsingh.dev"
            className="text-base font-medium md:text-xl text-black-900 dark:text-white-900"
          >
            hello@tarunsingh.dev
          </a>
        </div>
      </Container>
    </Section>
  );
};
