import React from "react";
import {
  Container,
  VBox,
  BannerHeader,
  BasicSegment,
} from "@ombiel/aek-lib";


export default class Screen extends React.Component {

  componentDidMount() {

  }

  render() {

    return (
      <Container>
        <VBox>
          <BannerHeader theme="alt" key="header" data-flex={0}>happycat</BannerHeader>
          <BasicSegment>
            <p>Meow meow.</p>
            <p>Nyan nyan.</p>
          </BasicSegment>
        </VBox>
      </Container>
    );

  }

}
