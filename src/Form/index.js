import "./style.css";

const Form = () => (
    <form className="form">
        <input type="text" placeholder="Co jest do zrobienia?" className="form__input" autoFocus />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;