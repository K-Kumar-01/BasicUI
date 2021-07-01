import React from "react";

import Seo from "@/components/seo";
import Layout from "@/layouts/index";
import File from "@/components/File";
import { Container } from "@/components/common";

const FilePage: React.FC = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Seo
        title="Image | BasicUI"
        description="Image Component for file upload"
      />
      <Layout>
        <Container>
          <File />
        </Container>
      </Layout>
    </React.Fragment>
  );
};

export default FilePage;
