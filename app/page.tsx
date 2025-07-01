'use client'

import Hero from "./components/hero";
import { useEffect, useState } from "react";
import { Data } from "./type";
import { About } from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";
import BackToTopButton from "./components/backToTopBtn";
import Loader from "./components/loader";



export default function Home() {
  
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((json) => setData(json));
  }, []);

  

  return (
    <>
      {!data ? <Loader />: (
        <div className="w-full h-full p-0 m-0 relative">
          {/* <Nav /> */}
          <BackToTopButton />
          <Hero data={data} />
          
          <About data={data} />
          <Projects data={data} />
          <Footer />
        </div>
      )}
    </>
    
  );
}
