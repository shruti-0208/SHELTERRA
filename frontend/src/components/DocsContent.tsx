"use client";
import { useState } from "react";

export default function DocsContent() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Button to Toggle Content */}
      <button
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        onClick={() => setShowContent(!showContent)}
      >
        Read our docs
      </button>

      {/* Content (Visible when showContent is true) */}
      {showContent && (
        <div className="mt-4 p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 shadow-md w-full max-w-3xl">
          <h2 className="text-xl font-bold">
            Land Suitability Analysis for Safe Construction using ML Model
          </h2>
          <p className="mt-2">
            This system assesses the safety of hilly areas for construction by analyzing various environmental and geological factors.
          </p>

          <h3 className="mt-4 font-semibold">Key Parameters Analyzed:</h3>
          <ul className="list-disc list-inside">
            <li><strong>Rainfall (mm):</strong> Measures precipitation levels affecting soil stability.</li>
            <li><strong>Slope Angle:</strong> Evaluates the steepness of the terrain.</li>
            <li><strong>Soil Saturation:</strong> Determines water content in the soil, influencing landslide risks.</li>
            <li><strong>Vegetation Cover:</strong> Assesses the presence of vegetation that stabilizes the land.</li>
            <li><strong>Earthquake Activity:</strong> Monitors seismic movements that may impact structural safety.</li>
            <li><strong>Proximity to Water Bodies:</strong> Identifies risks associated with nearby rivers, lakes, or groundwater.</li>
            <li><strong>Soil Type:</strong> Classifies the land based on gravel, sand, and silt composition.</li>
          </ul>

          <h3 className="mt-4 font-semibold">How It Works:</h3>
          <ul className="list-disc list-inside">
            <li><strong>ML Model:</strong> Analyzes environmental data to predict landsafety.</li>
            <li><strong>User Dashboard:</strong> Provides visual insights on safety levels.</li>
            <li><strong>Alert System:</strong> Notifies users if the area is unsafe for construction.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
