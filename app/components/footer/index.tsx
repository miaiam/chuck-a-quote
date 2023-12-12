"use client";
import { ResponseBody } from "@/app/api/viewCount/route";
import { updateViewCount } from "@/helpers/actions";
import { useEffect, useState, useRef, useCallback } from "react";

// id of the first row in the PageVisits Table
const ROW_ID = 1;

const Footer = () => {
  const [views, setViews] = useState<number|null>(null);
  const initialized = useRef(false)

  const updateAndFetchCounter = useCallback(async () => {
    const data = await updateViewCount(ROW_ID);
    const json: ResponseBody = await data.json();
    setViews(json.viewCount);
  }, []);

  useEffect(() => {

    // only call useEffect once
    if (!initialized.current) {
      initialized.current = true
      updateAndFetchCounter();
      
    }

  }, [])

  return <footer className="mt-4 text-light-grey w-full text-right font-light text-sm">Besucher Anzahl: {views}</footer>
}

export default Footer;