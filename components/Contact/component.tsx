import { Container, Section } from "components";
import { FC } from "react";

export const Contact: FC = () => {
  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={"Wanna reach out?"}
      description={
        "I am open to conversations about senior engineering, AI, and full-stack opportunities."
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
