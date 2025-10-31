import './Button.css'

const Button = ({ text , style='neu-button'}) => {
  return (
    <button className={style}>{text}</button>
  );
}

export default Button;
