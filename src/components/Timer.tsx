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

    let timeLeft: time = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
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
      <span key={timeLeft[interval as keyof time]} className="grid">
        {timeLeft[interval as keyof time]} <span>{interval} </span>
      </span>
    );
  });

  return (
    <div className="grid grid-cols-4 gap-8">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
}

export default Timer;
