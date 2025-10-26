export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
    onClick: () => void
}

export function Card({
    children,
    onClick,
    className = "",
    ...props
}: CardProps) {
    return (
        <div
            onClick={onClick}
            className={`bg-white border border-gray-200 rounded-lg cursor-pointer ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}