import React from "react";

import Seo from "@/components/seo";
import Layout from "@/layouts/index";
import { Container, Button } from "@/components/common";

import * as ButtonPageStyles from "@/styles/pages/button.module.scss";

const ButtonPage: React.FC = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Seo title="Button | BasicUI" description="Button Component" />
      <Layout>
        <Container withPaddingTop={true} withPaddingBottom={true}>
          <h2 className={ButtonPageStyles.heading}>Buttons</h2>
          Custom button component which provides different sizes, variants and
          colors to be used.
          <h2 className={ButtonPageStyles.heading}>Types</h2>
          <p>
            Six Types are supported as of default which are displayed below. Can
            be changed via <code>type</code> prop.
            <br />
            Default value is <code>basic</code>
          </p>
          <br />
          <div className={ButtonPageStyles.examples}>
            <Button text="Basic" />
            <Button type="primary" text="Primary" />
            <Button type="secondary" text="Secondary" />
            <Button type="success" text="Success" />
            <Button type="warning" text="Warning" />
            <Button type="danger" text="Danger" />
          </div>
          <h2 className={ButtonPageStyles.heading}>Variants</h2>
          <p>
            We support 2 variants:-
            <em>fill</em> and <em>outline</em>. Below are some examples of{" "}
            <em>fill</em>.
            <br />
            Use <code>variant</code> prop to toggle between the above two.
            <br />
            Defaults to <em>outline</em>.
          </p>
          <br />
          <div className={ButtonPageStyles.examples}>
            <Button text="Basic" variant="fill" />
            <Button type="primary" text="Primary" variant="fill" />
            <Button type="secondary" text="Secondary" variant="fill" />
            <Button type="success" text="Success" variant="fill" />
            <Button type="warning" text="Warning" variant="fill" />
            <Button type="danger" text="Danger" variant="fill" />
          </div>
          <h2 className={ButtonPageStyles.heading}>Sizes</h2>
          <p>
            5 sizes are by default provided :- <code>xs</code>, <code>sm</code>,
            <code> md</code>, <code>lg</code>, <code>xl</code>
            <br />
            Use <code>size</code> prop to toggle between the above two.
            <br />
            Defaults to <code>sm</code>.
          </p>
          <br />
          <div className={ButtonPageStyles.examples}>
            <Button type="primary" text="Extra-Small" size="xs" />
            <Button type="primary" text="Small" size="sm" />
            <Button type="primary" text="Medium" size="md" />
            <Button type="primary" text="Large" size="lg" />
            <Button type="primary" text="Extra Large" size="xl" />
          </div>
          <h2 className={ButtonPageStyles.heading}>Other Props</h2>
          <p className={ButtonPageStyles.description}>
            All props which a button supports is supported. Along with them,
            there are two more props
            <ol>
              <li>
                <code>disabled:</code> Boolean value denoting if button is
                disabled or not. Default is false.
              </li>
              <li>
                <code>text:</code> Text string which can be rendered inside
                button. Can be used if user only wants text in the button.
                Default value:I am a button
              </li>
            </ol>
          </p>
        </Container>
      </Layout>
    </React.Fragment>
  );
};

export default ButtonPage;
