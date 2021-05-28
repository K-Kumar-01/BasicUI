import * as React from "react";

import Seo from "@/components/seo";
import Layout from "@/layouts/index";

import "@/styles/index.scss";

const IndexPage: React.FC = (): React.ReactElement => (
  <React.Fragment>
    <Seo
      title="BasicUI"
      description="Commonly used react components with full customisable power."
    />
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  </React.Fragment>
);

export default IndexPage;
