
function Tabell(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>{props.header}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row, index) => (
          <tr key={index}>
            <td>{row.label}</td>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabell;