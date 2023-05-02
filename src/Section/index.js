import { Sections, Header, Title, Subtitle, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent, subtitle }) => (
  <Sections>
    <Header>
      <Title>{title}</Title>
      <Subtitle><i>{subtitle}</i></Subtitle>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </Sections>
);

export default Section;
