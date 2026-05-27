'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';

interface BirdLocation {
  lat: number;
  lng: number;
  name: string;
  slug?: string;
  imageUrl?: string | null;
  description?: string;
}

const defaultIcon = L.divIcon({
  className: 'bg-transparent',
  html: '<div style="background:#001f6e;color:white;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);font-size:16px;">🐦</div>',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -20],
});

export default function BirdMap({
  locations,
  center,
  zoom = 5,
  className = '',
}: {
  locations: BirdLocation[];
  center?: [number, number];
  zoom?: number;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || locations.length === 0) return null;

  const defaultCenter: [number, number] = center || [46.5, 105.0];
  const mapZoom = locations.length === 1 ? 7 : zoom;

  return (
    <div className={`rounded-xl overflow-hidden border border-mos-border/20 shadow-sm ${className}`}>
      <MapContainer
        center={defaultCenter}
        zoom={mapZoom}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, i) => (
          <Marker key={i} position={[loc.lat, loc.lng]} icon={defaultIcon}>
            <Popup>
              <div className="min-w-[180px] max-w-[240px]">
                {loc.imageUrl && (
                  <img
                    src={loc.imageUrl}
                    alt={loc.name}
                    className="w-full h-28 object-cover rounded-lg mb-2"
                  />
                )}
                {loc.slug ? (
                  <Link
                    href={`/birds/${loc.slug}`}
                    className="block font-[Manrope,sans-serif] text-sm font-bold text-[#001f6e] hover:underline leading-snug"
                  >
                    {loc.name}
                  </Link>
                ) : (
                  <span className="block font-[Manrope,sans-serif] text-sm font-bold text-[#001f6e] leading-snug">
                    {loc.name}
                  </span>
                )}
                {loc.description && (
                  <p className="text-[11px] text-[#666] font-[Manrope,sans-serif] mt-1 leading-relaxed line-clamp-3">
                    {loc.description}
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
