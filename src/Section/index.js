import { Sections, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent, subtitle }) => (
  <Sections>
    <Title>{title}{extraHeaderContent}</Title>
    <Body>
      {body}
    </Body>
  </Sections>
);

export default Section;
