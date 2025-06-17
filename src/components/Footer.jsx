import React from "react";
import { ChevronUp } from "lucide-react";
export const Footer = () => {
  return (
    <div className="bg-zinc-700 flex justify-between p-4 mt-20">
      <h1>Vito's Porto</h1>
      <div className=""> &copy;|2025</div>
      <div className="rounded-full hover:bg-zinc-600 ">
        <ChevronUp
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
    </div>
  );
};
