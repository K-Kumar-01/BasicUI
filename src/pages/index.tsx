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
    <Layout />
  </React.Fragment>
);

export default IndexPage;
