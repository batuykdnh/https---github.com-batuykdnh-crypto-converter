"use client";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ChangeDarkMode() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {!mounted ? (
        <Button className="bg-black text-white">System</Button>
      ) : (
        <>
          <Button
            onClick={() => {
              setTheme("light");
            }}
            className="hidden dark:block dark:bg-black text-white hover:bg-black"
          >
            Dark
          </Button>
          <Button
            onClick={() => {
              setTheme("dark");
            }}
            className="block text-black hover:bg-white bg-white dark:hidden "
          >
            Light
          </Button>
        </>
      )}
    </>
  );
}
