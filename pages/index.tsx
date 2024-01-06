import clsx from "clsx";
import { GetServerSideProps } from "next";
import { signIn } from "next-auth/react";
import { ComponentProps, ReactNode } from "react";
import { DASHBOARD_URL } from "../constants";
import { SignInIcon } from "../icons";
import { MarketingLayout } from "../layouts/Marketing";
import * as Server from "../lib/server";
import { Button, LinkButton } from "../primitives/Button";
import { Container } from "../primitives/Container";
import styles from "./index.module.css";

interface FeatureProps extends Omit<ComponentProps<"div">, "title"> {
  description: ReactNode;
  title: ReactNode;
}

function Feature({ title, description, className, ...props }: FeatureProps) {
  return (
    <div className={clsx(className, styles.featuresFeature)} {...props}>
      <h4 className={styles.featuresFeatureTitle}>{title}</h4>
      <p className={styles.featuresFeatureDescription}>{description}</p>
    </div>
  );
}

export default function Index() {
  return (
    <MarketingLayout>
      <Container className={styles.section}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>
          Groundbreaking Software, Bright Future
          </h1>
          <p className={styles.heroLead}>
          We are a pioneering software startup dedicated to developing innovative and cutting-edge software solutions that deliver novel and valuable experiences to users.
          </p>
        </div>
        <div className={styles.heroActions}>
          <Button icon={<SignInIcon />} onClick={() => signIn()}>
            Sign in
          </Button>
          {/* <LinkButton
            href="https://liveblocks.io/docs/guides/nextjs-starter-kit"
            target="_blank"
            variant="secondary"
          >
            Learn more
          </LinkButton> */}
        </div>
      </Container>
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>Features</h2>
        <div className={styles.featuresGrid}>
          <Feature
            description={
              <>
               We are a pioneering software startup dedicated to developing innovative and cutting-edge software solutions to meet market demands.
              </>
            }
            title="Pioneering Software Startup"
          />
          <Feature
            description={
              <>
                Our team consists of highly experienced software professionals capable of transforming disruptive ideas into high-quality products.
              </>
            }
            title="Team of Experienced Professionals"
          />
          <Feature
            description={
              <>
                We prioritize our customers, actively listening to feedback and continuously improving our products to meet their needs and expectations.
              </>
            }
            title="Customer-Centric Approach"
          />
          <Feature
            description={
              <>
                We relentlessly pursue innovation and creativity, continuously researching and developing unique software solutions that bring novel and valuable experiences to users.
              </>
            }
            title="Innovation and Creativity"
          />
          <Feature
            description={
              <>
                We leverage the latest and most advanced technologies to develop our products, ensuring high performance, robust security, and scalability.
              </>
            }
            title="Cutting-Edge Technology"
          />
          <Feature
            description={
              <>
                We provide exceptional and dedicated customer support, promptly addressing inquiries and assisting customers throughout their product usage journey.
              </>
            }
            title="Dedicated Customer Support"
          />
        </div>
      </Container>
    </MarketingLayout>
  );
}

// If logged in, redirect to dashboard
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await Server.getServerSession(req, res);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: DASHBOARD_URL,
      },
    };
  }

  return {
    props: {},
  };
};
