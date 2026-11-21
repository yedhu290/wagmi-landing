'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// import { useEffect } from 'react'; // Removed unused import

export type MapProps = {
    center: [number, number];
    zoom: number;
    locations: {
        id: number;
        city: string;
        address: string;
        phone: string;
        coords: [number, number]; // [lat, lng]
    }[];
};

const Map = ({ center, zoom, locations }: MapProps) => {
    // Create a custom primary-colored SVG marker
    const primaryIcon = L.divIcon({
        html: `
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.5 17.5 19 14.1667 19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11C5 14.1667 7.5 17.5 12 21Z" fill="#6676d2" stroke="white" stroke-width="1.5"/>
                <circle cx="12" cy="11" r="2.5" fill="white"/>
            </svg>
        `,
        className: 'custom-map-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
    });

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={true} // Enabled scroll/pinch zoom
            style={{ height: '100%', width: '100%' }}
        >
            {/*
                CARTO now gates its basemaps behind an API key and serves an
                "API KEY REQUIRED" watermark tile without one, so the base layer
                comes from Esri's free light grey canvas. That canvas ships
                without place names, hence the separate reference overlay.
                Note Esri orders its tile path {z}/{y}/{x}, not {z}/{x}/{y}.
            */}
            <TileLayer
                attribution='Tiles &copy; <a href="https://www.esri.com/">Esri</a> &mdash; Esri, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
                maxZoom={16}
            />
            <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
                maxZoom={16}
            />
            {locations.map((loc) => (
                <Marker key={loc.id} position={loc.coords} icon={primaryIcon}>
                    <Popup>
                        <div className="text-sm">
                            <strong className="block text-dark mb-1">{loc.city}</strong>
                            <p className="text-gray-600 mb-0">{loc.address}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
