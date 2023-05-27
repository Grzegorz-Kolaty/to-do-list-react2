import { Container } from "../../common/Container/styled"
import Header from "../../common/Header"
import Section from "../../common/Section"

function Author() {
  return (
    <Container>
      <Header title="O Autorze" />
      <Section title="Grzegorz Kolaty"
        body={<>nanana</>} />
    </Container>
  )
}
export default Author;