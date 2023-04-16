import "./style.css";

const Section = ({ title, body, extraHeaderContent, subtitle }) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__title">{title}<br />
        <p className="section__subtitle"><i>{subtitle}</i></p>
      </h2>
      {extraHeaderContent}
    </header>
    <div className="section__body">
      {body}
    </div>
  </section>
);

export default Section;
