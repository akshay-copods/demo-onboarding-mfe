import React from 'react'
import { Rocket } from "../Icons"

export const LaunchingSoonChip = () => {
    return (
        <div className="flex gap-2 w-40 bg-sunsetOrange px-4 py-1 rounded-full items-center ">
            <Rocket />
            <span className="text-xs">Launching Soon!</span>
        </div>
    )
}

