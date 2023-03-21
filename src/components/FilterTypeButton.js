
function FilterType(props) {
  const { name, className, defaultOption, options } = props;

  return (
    <div className="filter_type">
      <select name={name} className={className}>
        <option value="">{defaultOption}</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterType;
