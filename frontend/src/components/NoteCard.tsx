import { Card } from "./Card"


export interface NoteCardProps {
    id: number
    title?: string
    content: string
    createdAt: Date
    onClick: () => void
}

export function NoteCard({
    id,
    title,
    content,
    createdAt,
    onClick,
}: NoteCardProps) {
    return (
        <Card onClick={onClick} data-id={id}>
            <div>
                <h1>{title}</h1>
                <p>{createdAt.toLocaleString()}</p>
                <p>{content}</p>
            </div>
        </Card>
    )
}