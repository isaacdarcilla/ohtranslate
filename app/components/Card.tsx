import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col max-w-5xl mx-auto justify-center lg:items-start overflow-y-hidden">
                <h1 className="my-4 pb-8 text-3xl md:text-5xl tracking-wider text-brand-100 font-bold leading-tight text-center md:text-left">
                    Translate Tagalog to
                    Baybayin, Buhid, Hanunoo, Tagbanwa
                </h1>

                {children}
            </div>
        </div>
    )
}