"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";
// import { House } from "lucide-react";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { CiFacebook, CiMail } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Home, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DockBar() {
  const data = [
    {
      id: 1,
      name: "WhatsApp",
      icon: <FaWhatsapp size={18} />,
      href: "#",
    },
    {
      id: 2,
      name: "Facebook",
      icon: <CiFacebook size={18} />,
      href: "#",
    },
    {
      id: 3,
      name: "GitHub",
      icon: <FaGithub size={18} />,
      href: "#",
    },
    {
      id: 4,
      name: "Mail",
      icon: <CiMail size={18} />,
      href: "#",
    },
  ];

  //TODO: add links

  const { theme, setTheme } = useTheme();

  const [mouseX, setMouseX] = useState<number | undefined>(undefined);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouseX(e.pageX);
  };

  return (
    <TooltipProvider>
      <Dock
        direction="middle"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-background"
        // distance={10}
      >
        <DockIcon mouseX={mouseX}>
          <Tooltip>
            <TooltipTrigger>
              <Link href="#">
                <Home size={18} />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <Separator orientation="vertical" />
        {data.map((props, i) => (
          <DockIcon key={i} mouseX={mouseX}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={props.href}>{props.icon}</Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{props.name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" />
        <DockIcon mouseX={mouseX}>
          <Tooltip>
            <TooltipTrigger
              className="flex items-center"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              <Sun size={18} className="hidden dark:block" />
              <Moon size={18} className="dark:hidden" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Change</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
}
