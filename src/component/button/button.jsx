import "./button.css";

const Button = ({ ButtonText, onClick, id, className }) => {
    // console.log(className);
    return (
        <button id={id} className={className} onClick={() => onClick()}>
            {ButtonText}
        </button>
    );
};

export default Button;
