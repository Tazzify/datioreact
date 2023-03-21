
function Voucher() {
  return (
    <div className="voucher">
      <h4 className="voucher_text">Kampanjkod</h4>
      <input type="text" name="vouchername" className="voucher_entry" placeholder="Skriv in koden här:" />
      <button>Använd</button>
    </div>
  );
}

export default Voucher;
