import React from "react";
import serve from '../Images/serving.jpg';

function Services() {
  return (
    <div className="flex">
      <img src={serve} alt="serving" className="serve" />
      <p className="service">
        Projects are carried out overseas clients for Europe, Middle East,
        Africa & India. We have complete expertise in structural segment right
        from design Analysis to detail engineering. Our wide range of clients
        includes EPC Company, GC & contractors for designing industrial
        residential, commercial, retail and institutional structures
        effectively. We are specialized in Process plant, cement plant,
        conveyors, etc. for concrete, steel and RCC Construction.
      </p>
    </div>
  );
}

export default Services;
