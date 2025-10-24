import { useEffect, useState } from "react";

export const Counter = () => {
  const targetDate = new Date("2026-09-26T20:59:59").getTime();
  const [timeDiff, setTimeDiff] = useState(targetDate - Date.now());
  const [lastTime, setLastTime] = useState({
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDiff(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    setLastTime({
      day: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeDiff / (1000 * 60)) % 60),
      seconds: Math.floor((timeDiff / 1000) % 60),
    });
  }, [timeDiff]);

  return (
    <div className="">
      <div className="w-full h-full bg-red-300 p-5">
        <div className="flex justify-center gap-5">
          {timeDiff <= 0 ? (
            "Chegou o grande dia!"
          ) : (
            <>
              <div>{lastTime.day}</div>
              <div>{lastTime.hours}</div>
              <div>{lastTime.minutes}</div>
              <div>{lastTime.seconds}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
