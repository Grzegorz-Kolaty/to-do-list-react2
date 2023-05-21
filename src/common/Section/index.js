import { Sections, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Sections>
    <Title>{title}{extraHeaderContent}</Title>
    <Body>
      {body}
    </Body>
  </Sections>
);

export default Section;
