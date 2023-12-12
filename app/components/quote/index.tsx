"use client"

import { useEffect, useState } from "react";
import Button from "../button";

const CATEGORY = "dev";
const API_ROUTE = `https://api.chucknorris.io/jokes/random?category=${CATEGORY}`;

const Quote = () => {
  const [quote, setQuote] = useState<string|null>(null);

  useEffect(() => {
    getQuote();
  }, []);
  
  async function getQuote() {
    const res = await fetch(API_ROUTE);
    const data = await res.json();
    setQuote(data?.value);
  }

  return (
    <div className="flex flex-col items-center gap-4 md:justify-center md:gap-6">
      <div className="md:text-4xl text-2xl font-bold text-center">{quote}</div>
      <Button onClick={getQuote} value="Change quote" />
    </div>
  );
}

export default Quote;