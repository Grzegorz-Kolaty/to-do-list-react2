import { Sections, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Sections>
    <Title><b>{title}</b>{extraHeaderContent}</Title>
    <Body>
      {body}
    </Body>
  </Sections>
);

export default Section;
