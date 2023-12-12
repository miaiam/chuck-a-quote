"use client";
import { ResponseBody } from "@/app/api/viewCount/route";
import { updateViewCount } from "@/helpers/actions";
import { useEffect, useState } from "react";

const Footer = () => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const updateAndFetchCounter = async () => {
      const data = await updateViewCount();
      const json: ResponseBody = await data.json();
      setViews(json.viewCount);
    }
  
    updateAndFetchCounter();
  }, []);

  return <footer className="mt-4 text-light-grey w-full text-right font-light text-sm">Besucher Anzahl: {views}</footer>
}

export default Footer;