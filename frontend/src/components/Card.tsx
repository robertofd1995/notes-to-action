export interface CardProps {
    children?: React.ReactNode
    onClick: () => void
}

export function Card({
    children,
    onClick,
    ...props
}: CardProps) {
    return (
        <div onClick={onClick} {...props}>
            {children}
        </div>
    )
}