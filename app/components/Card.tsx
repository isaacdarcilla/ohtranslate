import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col max-w-5xl mx-auto justify-center lg:items-start overflow-y-hidden">
                <h1 className="my-4 pb-8 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    Translate Tagalog to
                    <span className="bg-clip-text mx-3 text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                        Baybayin, Buhid, Hanunoo, Tagbanwa
                    </span>
                </h1>

                {children}
            </div>
        </div>
    )
}