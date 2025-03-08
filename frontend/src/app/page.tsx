"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DocsContent from "@/components/DocsContent";

export default function Home() {
  const [showDocs, setShowDocs] = useState(false);
  const router = useRouter();

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-[#556B2F]">
      {/* Background Image */}
      <div
        className="absolute inset-x-10 top-5 bottom-5 w-[calc(100vw-100px)] h-[calc(100vh-80px)] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: "url('/BG.jpg')" }}
      ></div>

      {/* Content - Centered */}
      <div className="relative z-10 flex flex-col items-center text-center">
      {/* <h1 className="text-6xl font-bold text-[#6B8E23]">SHELTERRA</h1> */}
      {/* <p className="text-2xl text-[#6B8E23]">TRUST IN EVERY TERRAIN</p> */}

        {/* Buttons Side by Side */}
        <div className="mt-89 mr-160 flex gap-6">
          <button
            className="rounded-full bg-white text-[#556B2F] font-semibold text-lg h-12 px-8 hover:bg-[#cce7b0] transition"
            onClick={() => router.push("/auth")}
          >
            Get Started
          </button>

          <button
            className="rounded-full bg-white text-[#556B2F] font-semibold text-lg h-12 px-8 hover:bg-[#cce7b0] transition"
            onClick={() => setShowDocs(!showDocs)}
          >
            {showDocs ? "Hide Docs" : "Read our Docs"}
          </button>
        </div>

        {/* Docs Section */}
        {showDocs && <div className="mt-6 bg-white p-4 rounded-lg shadow-md"><DocsContent /></div>}
      </div>
    </div>
  );
}
