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
        <Card
            onClick={onClick}
            data-id={id}
            className="group shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-200 w-full"
        >
            <div className="flex flex-col p-3 sm:p-4 md:p-5 relative">
                {/* Date at the top */}
                <p className="text-xs sm:text-xs md:text-sm text-gray-500 mb-2 text-left">
                    {createdAt.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: createdAt.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
                    })}
                </p>

                {/* Title aligned to left */}
                {title && (
                    <>
                        <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 line-clamp-2 break-words text-left mb-2">
                            {title}
                        </h2>
                        {/* Separator */}
                        <hr className="border-t border-gray-200 mb-3" />
                    </>
                )}

                {/* Description aligned to left */}
                <p className="text-xs sm:text-sm md:text-base text-gray-700 line-clamp-4 sm:line-clamp-6 md:line-clamp-8 whitespace-pre-wrap break-words text-left">
                    {content}
                </p>
            </div>
        </Card>
    )
}