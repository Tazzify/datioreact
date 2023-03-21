
function LoginPageInput(props) {
  return (
    <input
      className="inloggning_input"
      type={props.type}
      required
      placeholder={props.placeholder}
      pattern={props.pattern}
      title={props.title}
    />
  );
}

export default LoginPageInput;