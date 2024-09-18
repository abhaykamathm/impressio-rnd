import React from "react";
import { olympicsData } from "../data/olympicsData";

export default function Summary() {
  // Calculate total medals
  const totalGold = olympicsData.reduce((sum, year) => sum + year.gold, 0);
  const totalSilver = olympicsData.reduce((sum, year) => sum + year.silver, 0);
  const totalBronze = olympicsData.reduce((sum, year) => sum + year.bronze, 0);
  const totalMedals = totalGold + totalSilver + totalBronze;

  return (
    <div className="bg-gray-800 p-4 pb-6 rounded shadow-lg text-white flex flex-col items-start">
      <h2 className="w-full text-2xl font-bold mb-4">
        Olympic Performance Summary
      </h2>
      <div className="flex justify-center gap-3">
        <p className="mb-2">
          Gold: <strong>{totalGold}</strong>
        </p>
        <p className="mb-2">
          Silver : <strong>{totalSilver}</strong>
        </p>
        <p className="mb-2">
          Bronze : <strong>{totalBronze}</strong>
        </p>
      </div>
      <p className="mt-1 text-xl">
        Total Medals: <strong>{totalMedals}</strong>
      </p>
      <p className="mt-3 text-gray-400 text-justify">
        Note: The data presented here reflects India's journey in the Olympics,
        showcasing the persistence and determination of its athletes over the
        years. While the number of medals may fluctuate, the spirit of
        competition and the pride in representing the nation remains constant.
      </p>
    </div>
  );
}
