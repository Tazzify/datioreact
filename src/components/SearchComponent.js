
function SearchForm() {
  return (
    <form className="form_search">
      <input type="text" placeholder="Sök..." className="search" />
      <button type="submit" className="sök_knapp">
        <span className="material-icons-outlined" id="search_icon">
          search
        </span>
      </button>
    </form>
  );
}

export default SearchForm;