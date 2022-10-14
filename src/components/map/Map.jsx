import './Map.css';

function Map() {
  return (
    <div className="Row">
      <iframe
        title='map'
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        className="map-iframe"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-8.547363281250002%2C39.7240885773337%2C5.383300781250001%2C53.81362579235237&amp;layer=mapnik"
      ></iframe>
    </div>
  );
}

export default Map;