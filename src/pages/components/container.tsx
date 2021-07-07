import React from "react";

import Seo from "@/components/seo";
import Layout from "@/layouts/index";
import { Container } from "@/components/common";

import * as ContainerPageStyles from "@/styles/pages/container.module.scss";

const ContainerPage: React.FC = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Seo title="Container | BasicUI" description="Container Component" />
      <Layout>
        <Container withPaddingBottom={true} withPaddingTop={true}>
          <div>
            <p style={{ fontSize: "1.5rem" }}>
              The container component is similar to bootstrap container
              component.
            </p>
            <Container className={ContainerPageStyles.demoContainer}>
              I am a container
            </Container>

            <h3 className={ContainerPageStyles.descriptionHeading}>Props</h3>
            <p className={ContainerPageStyles.description}>
              The container component accepts all the props which a div
              component can accept in react.
              <br />
              Apart from that, the component accepts two custom props.
              <ol>
                <li>
                  <code>withPaddingTop:</code> A boolean element. Defaults to
                  false. When true, adds a top padding of 15px to the container.
                </li>
                <li>
                  <code>withPaddingBottom:</code> A boolean element. Defaults to
                  false. When true, adds a bottom padding of 15px to the
                  container.
                </li>
              </ol>
            </p>
          </div>
        </Container>
      </Layout>
    </React.Fragment>
  );
};

export default ContainerPage;
