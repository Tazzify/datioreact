
function SortOptions() {
  return (
    <div className="sort_div">
      <label htmlFor="sort">Sortera efter: </label>
      <select name="sortering" id="sort">
        <option value="Relevans">Relevans</option>
        <option value="Lägsta pris">Lägsta pris</option>
        <option value="Högsta pris">Högsta pris</option>
        <option value="Bästsäljare">Bästsäljare</option>
        <option value="Nyheter">Nyheter</option>
        <option value="Namn (A-Ö)">Namn (A-Ö)</option>
      </select>
    </div>
  );
}

export default SortOptions;