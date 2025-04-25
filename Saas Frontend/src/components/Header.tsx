import { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";
import axios from "axios";
import { MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

const Header = () => {
  const [city, setCity] = useState("");

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    const fetchCity = async () => {
      if (coords) {
        try {
          const res = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
          );

          const address = res.data.address;
          const cityName = address.city || address.town || address.village || address.state || "Unknown";
          setCity(cityName);
        } catch (err) {
          console.error("Error fetching city from coordinates", err);
        }
      }
    };

    fetchCity();
  }, [coords]);

  return (
    <header className="flex justify-between py-2 px-4 items-center border-b-2 border-gray-700">
      <div>
        <h1 className="text-2xl font-bold hover:cursor-pointer">
          <Link to ='/'>Book<span className="text-blue-600">Chautari</span></Link>
        </h1>
      </div>
      <div>
        {isGeolocationAvailable && isGeolocationEnabled ? (<div className="flex items-center border-3 border-gray-600 rounded-full p-2">
            <MapPin /> <h1> <span className=" font-bold">{city || "loading..."}</span></h1>
        </div>
        ) : (
          <h1>Location not available</h1>
        )}
      </div>
      
    </header>
  );
};

export default Header;
