import Leaflet from "leaflet";

import mapMarkerImg from "../images/map-marker.svg";

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [40, 42],
    iconAnchor: [20, 42],
    popupAnchor: [165, 18],
  });

export default mapIcon;