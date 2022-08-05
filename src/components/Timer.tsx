import React, { useEffect, useState } from "react";
import "../App.css";

interface time {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

function Timer() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`08/10/${year}`) - +new Date();

    let timeToReach: time = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeToReach = {
        days: 0
          ? 0
          : Math.floor(difference / (1000 * 60 * 60 * 24)) < 10
          ? `0${Math.floor(difference / (1000 * 60 * 60 * 24))}`
          : Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: 0
          ? 0
          : Math.floor((difference / (1000 * 60 * 60)) % 24) < 10
          ? `0${Math.floor((difference / (1000 * 60 * 60)) % 24)}`
          : Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: 0
          ? 0
          : Math.floor((difference / 1000 / 60) % 60) < 10
          ? `0${Math.floor((difference / 1000 / 60) % 60)}`
          : Math.floor((difference / 1000 / 60) % 60),
        seconds: 0
          ? 0
          : Math.floor((difference / 1000) % 60) < 10
          ? `0${Math.floor((difference / 1000) % 60)}`
          : Math.floor((difference / 1000) % 60),
      };
    }

    return timeToReach;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: any[] = [];

  Object.keys(timeLeft).forEach((interval: any) => {
    if (!timeLeft[interval as keyof time]) {
      return;
    }

    timerComponents.push(
      <span key={timeLeft[interval as keyof time]} className="grid font-bold">
        <span
          style={{
            background: "hsl(236, 21%, 26%)",
            color: "hsl(345, 95%, 68%)",
            borderRadius: "10px",
            boxShadow: "0px 10px 8px -1px black",
          }}
          className="text-7xl px-5 py-6 mb-4"
        >
          {timeLeft[interval as keyof time]}
        </span>
        <span className="uppercase">{interval} </span>
      </span>
    );
  });

  return (
    <>
      {timerComponents.length ? (
        <div className="grid grid-cols-4 gap-8 w-fit mb-52">
          {timerComponents}
        </div>
      ) : (
        <div className="text-center mb-52">
          <span className="title font-bold mb-32 text-2xl tracking-widest text-center">
            Time's up!
          </span>
        </div>
      )}
    </>
  );
}

export default Timer;
