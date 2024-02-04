import styles from "./Button.module.css"
const Button = (props) => {
  const {isSecond, icon, text, ...rest} = props;
  return (
    <button
      {...rest}
      className={isSecond ? styles.second_btn : styles.primary_btn}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
