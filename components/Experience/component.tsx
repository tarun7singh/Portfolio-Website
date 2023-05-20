import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useMdScreen } from "lib";
import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Item } from "./libs/Item";

export const Experience: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const mdScreen = useMdScreen();

  const experience = [
    {
      title: "Software Developer",
      place: "SOTI Inc",
      date: "Jan 2023 - Present",
    },
    {
      title: "Full Stack Web Developer",
      place: "Basebuild",
      date: "May 2022 - May 2023",
    },
    {
      title: "Freelancer",
      place: "Upwork, Remote",
      date: "Jul 2021 - Present",
    },
    {
      title: "Full Stack Web Developer",
      place: "Kisan Network",
      date: "Aug 2020 - Aug 2021",
    },
    {
      title: "Junior Engineer",
      place: "Dockendale Ship Management, Mumbai",
      date: "Dec 2018 - Dec 2019",
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={"Experience"}
      description={
        "Here are some great companies I had the honour to join for working with."
      }
    >
      <Container className="mt-14">
        <div className="flex justify-between max-w-screen-sm" ref={ref}>
          {mdScreen ? (
            <>
              <div>
                {experience.slice(0, 3).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === 2}
                    controls={controls}
                    custom={i}
                  />
                ))}
              </div>
              <div>
                {experience.slice(3).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === 1}
                    controls={controls}
                    custom={i}
                  />
                ))}
              </div>
            </>
          ) : (
            <div>
              {experience.map((item, i) => (
                <Item
                  {...item}
                  key={i}
                  first={i === 0}
                  controls={controls}
                  last={i === experience.length - 1}
                  custom={i}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
