import Link from "next/link";
import {
  ContactRound,
  Home,
  NotebookText,
  SquareChartGantt,
} from "lucide-react";
import AnimatedBackground from "@/components/motion-ui/animated-background";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const links = [
    {
      id: 1,
      icon: <Home size={14} />,
      name: "Home",
      href: "#",
    },
    {
      id: 2,
      icon: <NotebookText size={14} />,
      name: "About",
      href: "#about",
    },
    {
      id: 3,
      icon: <SquareChartGantt size={14} />,
      name: "Projects",
      href: "#project",
    },
    {
      id: 4,
      icon: <ContactRound size={14} />,
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <nav className="bg-background font-poppins fixed top-0 left-1/2 transform -translate-x-1/2 max-w-7xl w-full z-50">
      <div className="container mx-auto p-5 flex items-center justify-between w-full border rounded-xl mt-5">
        <Link
          href="#"
          className="font-bold hover:text-accent duration-100 text-2xl uppercase font-poppins"
        >
          Toufiq
        </Link>

        <div className=" items-center justify-center gap-1 font-light font-nunito md:flex hidden">
          <AnimatedBackground
            defaultValue={links[0].name}
            className="rounded-lg bg-zinc-100 dark:bg-zinc-800 "
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.3,
            }}
            enableHover
          >
            {links.map((props, i) => (
              <div
                key={i}
                data-id={props.name}
                className="px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                <Link
                  href={props.href}
                  className="capitalize flex items-center gap-2"
                >
                  {props.icon}
                  {props.name}
                  {/* <Separator orientation="vertical" className="h-full bg-white text-white"/> */}
                </Link>
              </div>
            ))}
          </AnimatedBackground>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-start mb-10">Navigation Menu</SheetTitle>
                {links.map((props, i) => (
                  <div
                    key={i}
                    data-id={props.name}
                    className="py-1 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    <Link
                      href={props.href}
                      className="capitalize flex items-center gap-2"
                    >
                      {props.icon}
                      {props.name}
                      {/* <Separator orientation="vertical" className="h-full bg-white text-white"/> */}
                    </Link>
                  </div>
                ))}
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
