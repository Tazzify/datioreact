function CheckboxButton(props) {
  return (
    <div className="remember_me">
      <label className="remember_me_text">{props.text}
        <span id="medlemsvillkor">{props.id}</span>.
      </label>
      <input className="checkbox" type="checkbox" />
    </div>
  );
}

export default CheckboxButton;