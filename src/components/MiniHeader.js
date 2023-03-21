import DarkModeToggle from "./DarkThemeFuction";

function MiniHeader() {
  return (
    <div className="mini-header">
      <div className="mini_header_content">
        <DarkModeToggle />

        <h6 className="mini_header_text">Privat</h6>
        <h6 className="mini_header_text" id="mini_header_text_right">
          Företag
        </h6>
      </div>
    </div>
  );
}

export default MiniHeader;
