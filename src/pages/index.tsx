import * as React from "react";

import Seo from "../components/seo";

const IndexPage: React.FC = (): React.ReactElement => (
  <React.Fragment>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </React.Fragment>
);

export default IndexPage;
