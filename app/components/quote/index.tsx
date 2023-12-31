"use client"

import { useEffect, useState, useRef, useCallback } from "react";
import Button from "../button";
import LoadingSpinner from "../loading-spinner";

const CATEGORY = "dev";
const API_ROUTE = `https://api.chucknorris.io/jokes/random?category=${CATEGORY}`;

const Quote = () => {
  const [quote, setQuote] = useState<string|null>(null);
  const initialized = useRef(false)

  const getQuote = useCallback(async () => {
    setQuote(null);
    const res = await fetch(API_ROUTE);
    const data = await res.json();
    setQuote(data?.value);
  }, []);
  
  useEffect(() => {
    // only call useEffect once
    if (!initialized.current) {
      initialized.current = true
      getQuote();
    }
  }, []);

  if (!quote) return <div className="flex md:items-center justify-center"><LoadingSpinner/></div>

  return (
    <div className="flex flex-col items-center gap-4 md:justify-center md:gap-6">
      <div className="md:text-4xl text-2xl font-bold text-center">{quote}</div>
      <Button onClick={getQuote} value="Change quote" />
    </div>
  );
}

export default Quote;
