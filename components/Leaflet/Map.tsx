import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { useEffect, useState, Fragment, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";

const isTouchDevice = () => {
  return "ontouchstart" in window;
};
const Map: React.FC<any> = (props) => {
  const [map, setMap] = useState<any>(null);
  const touchScreen = isTouchDevice();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (map && !active) {
      map.invalidateSize();
      setActive(true);
    }
  }, [map, props.open]);

  return (
    <MapContainer
      dragging={touchScreen ? false : true}
      center={[props.koordinate[0].lat, props.koordinate[0].lng]}
      style={{
        height: "30rem",
        maxHeight: "70vh",
        width: "100%",
        borderRadius: "1rem",
        zIndex: props.zIndex ? 1 : -1,
        boxShadow: "0px 0px 15px 0px black",
      }}
      zoom={props.ZoomIn ? props.ZoomIn : 6}
      scrollWheelZoom={false}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {props.koordinate?.map((val: any, index: number) => (
        <Marker key={index} position={[val.lat, val.lng]}>
          <Popup key={index}>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
              <img style={{ width: "200px", borderRadius: "1rem" }} src="/slovenija.jpeg" />
              <h3 style={{ margin: "3px" }}> {val.city}</h3>
              <p style={{ maxWidth: "200px", margin: 0, padding: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button
                onClick={() => {
                  console.log(props.open);
                }}
                style={{
                  display: "inline-block",
                  margin: "3px auto",
                  backgroundColor: "hsl(142, 90%, 61%)",
                  cursor: "pointer",
                  fontWeight: 700,
                  borderStyle: "solid",
                  borderColor: "black",
                  borderWidth: "1px",
                  borderRadius: "0.5rem",
                  padding: "0.3rem",
                }}
              >
                Discover
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
