"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import PinIcon from "./PinIcon";
import Perfil from "../../public/perfil.jpeg";
import Link from "next/link";
import Loading from "./Loading";

const links = [
  { name: "GitHub", url: "https://github.com/felipeB21" },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/felipe-bolgar-b08648285/",
  },
  { name: "Portfolio", url: "https://felipebolgar.vercel.app/" },
  {
    name: "Instagram",
    url: "https://www.instagram.com/felipebolgar/?hl=es-la",
  },
];

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const weatherApi = async () => {
      const API_URL =
        "https://api.weatherapi.com/v1/current.json?key=0c08724b8f46448e9d112644232810&q=Buenos%20Aires&aqi=no";

      try {
        const data = await fetch(API_URL);
        const response = await data.json();
        setWeatherData(response);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Error fetching weather data");
      } finally {
        setLoading(false);
      }
    };

    weatherApi();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex items-center justify-between py-1 px-3 rounded-xl text-sm bg-neutral-700">
            <div className="flex items-center gap-1">
              <PinIcon /> <span>{weatherData.location.name}</span>
            </div>
            <div className="flex items-center gap-3 bg-neutral-800 px-3 rounded-xl">
              <div className="flex items-center">
                <Image
                  className="w-auto h-auto"
                  src={`https:${weatherData.current.condition.icon}`}
                  alt="Weather"
                  width={40}
                  height={40}
                />
                <p>{weatherData.current.temp_c}°C</p>
              </div>
              <p className="flex">
                {weatherData.location.localtime.split(" ")[1]}
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-2 p-4 bg-zinc-900 rounded-xl">
            <nav className="text-lg">
              <ul>
                {links.map((link) => (
                  <li key={link.url}>
                    <Link href={link.url} target="_blank">
                      <p className="text-neutral-400 hover:text-white duration-150">
                        {link.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <Image
                className="rounded-full w-[120px] h-[120px] hover:rounded-lg duration-75"
                src={Perfil}
                alt="photo"
                width={120}
                height={120}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
