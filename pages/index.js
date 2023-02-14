"use client"; // this is a client component

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./../src/app/page.module.css";
import axios from "axios";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [result, setResult] = useState(null);

  function service(url) {
    try {
      axios.get(url).then((response) => {
        console.log(response);
        setResult(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  function service2() {
    try {
      axios.get("https://api.ipgeolocation.io/ipgeo?apiKey=0b220fc73ca94e4b8eb795e6b4994241").then((response) => {
        console.log(response);
        setResult(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  function service3() {
    try {
      axios.get("http://ip-api.com/json/").then((response) => {
        console.log(response);
        setResult(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  function service4() {
    try {
      axios.get("http://api.ipstack.com/check?access_key=e2307b75886781d833eedabcfcff6042").then((response) => {
        console.log(response);
        setResult(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  function service5() {
    try {
      axios.get("http://api.ipstack.com/check?access_key=e2307b75886781d833eedabcfcff6042").then((response) => {
        console.log(response);
        setResult(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>TEST de plusieurs service de IP géolocalisation</h1>
      <main className={styles.main}>
        <div className={styles.service}>
          <div>
            <h3>Service 1: ABSTRACTAPI </h3>
            <button onClick={() => service('https://ipgeolocation.abstractapi.com/v1/?api_key=0189f40f0ee74960b79fc02274fd632a')}>Valider</button>
          </div>
          <div>
            <h3>Service 2: IP GEOLOCALISATION</h3>
            <button onClick={() => service('https://api.ipgeolocation.io/ipgeo?apiKey=0b220fc73ca94e4b8eb795e6b4994241')}>Valider</button>
          </div>
          <div>
            <h3>Service 3: IP2LOCATION</h3>
            <button onClick={() => service('https://api.ip2location.com/v2/?key=J9Y4W4QW6E&format=json&package=WS25&&addon=continent,country,region,city,geotargeting')}>Valider</button>
          </div>
          <div>
            <h3>Service 4: IPAPI </h3>
            <button onClick={() => service('https://ipapi.co/json/')}>Valider</button>
          </div>
          <div>
            <h3>Service 5: IPIFY </h3>
            <button onClick={() => service('https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_JOGj9MWCZJMtqgwOXbxa8sEqTO4nE')}>Valider</button>
          </div>
          
        </div>

        <div className="result">
          <ul>
            <li>Ville: {result?.city || result?.location.city || result?.city_name}</li>
            <li>IP: {result?.ip || result?.query || result?.ip_address}</li>
            <li>Code postal: {result?.postal || result?.zipcode || result?.zip_code || result?.zip || result?.postal_code || result?.location.postalCode} </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
