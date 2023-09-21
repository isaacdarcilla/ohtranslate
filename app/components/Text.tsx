import { ReactNode } from "react"

interface TextProps {
    children: ReactNode,
    className?: string
}

export default function Text({ children, className }: TextProps) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}