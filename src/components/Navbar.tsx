import React from 'react'
import { cn } from "@/lib/utils"
import { FaMapPin, FaPhone } from "react-icons/fa";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"



const SOCIALS = [
    {
      name: "location",
      label: "I'm located at Car 209, room E!",
      Icon: FaMapPin,
    },
    {
      name: "number",
      label: "My number is 669-288-1723!",
      Icon: FaPhone,
    },
  ]

export const Navbar = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "animate-move-down flex items-center justify-between py-10 text-gray-200",
        className,
      )}
    >
      <h1 className="-rotate-2 text-2xl font-bold underline decoration-orange-300 underline-offset-8 text-gray-200">
        I'm Advay!
      </h1>
      <div className="flex items-center gap-5">
        {SOCIALS.map((social, index) => (
            
          <span key={index} aria-label={social.label}>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <div className='flex justify-center items-center px-2'>
                            <span className = "px-2">{social.name}</span>
                            <social.Icon className="h-5 w-5 transition-all hover:scale-150" />
                        </div>   
                    </TooltipTrigger>
                    <TooltipContent>
                    <p>{social.label}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
          </span>
        ))}
      </div>
    </nav>
  );
};