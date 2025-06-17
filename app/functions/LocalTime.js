"use client";

import { useEffect, useState } from "react";

export default function LocalTime({ isoString }) {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const formatted = new Date(isoString).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: false,
    });
    setLocalTime(formatted);
  }, [isoString]);

  return <span>{localTime}</span>;
}
