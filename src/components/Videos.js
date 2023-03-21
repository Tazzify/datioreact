
function ProduktVideos() {
  return (
    <>
      <br />
      <video className="video" controls poster="bilder/1728141-amd-ryzen-65w-5-pib-right-1260x709.webp">
        <source src="videor/amdPromoVid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br />
      <iframe className="video" src="https://www.youtube-nocookie.com/embed/CTiRNnSg0jA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </>
  );
}

export default ProduktVideos;