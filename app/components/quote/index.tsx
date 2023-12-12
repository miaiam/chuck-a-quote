"use client"

import { useEffect, useState } from "react";

const CATEGORY = "dev";
const API_ROUTE = `https://api.chucknorris.io/jokes/random?category=${CATEGORY}`;

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    getQuote();
  }, []);
  
  async function getQuote() {
    const res = await fetch(API_ROUTE);
    const data = await res.json();
    setQuote(data?.value);
  }
  

  return (<div className="text-4xl font-bold">{quote}</div>);
}

export default Quote;