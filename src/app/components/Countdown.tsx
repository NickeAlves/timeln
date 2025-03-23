"use client";

import React, { useEffect, useState } from "react";

export default function Countdown() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const targetDate = new Date("2025-04-29T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeDifference = targetDate.getTime() - currentTime.getTime();
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const formattedDate = currentTime.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl mx-auto py-8 rounded-lg shadow-2xl">
      <p className="font-bold">
        Today: {formattedDate} {formattedTime}{" "}
      </p>
      <h2 className="text-2xl font-bold text-green-500">
        Faltam para felicidade:
      </h2>
      <div className="flex justify-center p-6 w-full max-w-4xl mx-auto py-4 rounded-lg shadow-lg items-center bg-green-600">
        <p>
          {days} day(s), {hours} hour(s), {minutes} minute(s), and {seconds}{" "}
          second(s)
        </p>
      </div>
    </div>
  );
}
