import { Container } from "../../common/Container/styled"
import Header from "../../common/Header"
import Section from "../../common/Section"

function Author() {
  return (
    <Container>
      <Header title="O Autorze" />
      <Section title="Grzegorz Kolaty"
        body={
          <>
            <p>
              <b>Najbardziej zajmuje mnie nauka programowania i gry na gitarze!</b>🎸<br />
              Obie rzeczy rozpocząłem stosunkowo niedawno i staram się im poświęcić każdą wolną chwilę.<br />
              Interesuję się dietetyką🥑 co w konsekwencji zahacza o <i>medycynę🥼 i chemię🧪</i>.<br />
              Obecnie jestem junior testerem szukującym się do pierwszego egzaminu z ISTQB, życzcie mi powodzenia!<br />
            </p>
            Mam nadzieję, że strona Ci się spodobała, warto zajrzeć co tutaj jest pod spodem - wprowadziłem całe mnóstwo rzeczy tj. <b>React-saga czy error handling</b>
          </>
        }
      />
    </Container>
  )
}
export default Author;