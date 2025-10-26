import { useState } from "react"
import { Card } from "../Card"

export interface TaskCardProps {
    id: number
    title?: string
    content: string
    createdAt: Date
    onClick: () => void
    onToggleComplete?: (id: number, completed: boolean) => void
    completed: boolean
    deadline?: Date
    priority?: 'low' | 'medium' | 'high'
    category?: string
}

export function TaskCard({
    id,
    title,
    content,
    createdAt,
    onClick,
    onToggleComplete,
    completed,
    deadline,
    priority,
    category,
}: TaskCardProps) {

    const [isCompleted, setCompleted] = useState(completed)

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation() // Prevent card click when toggling checkbox
        const newCompletedState = !isCompleted
        setCompleted(newCompletedState)
        onToggleComplete?.(id, newCompletedState)
    }

    const getPriorityIcon = (priority?: string) => {
        switch (priority) {
            case 'high':
                return (
                    <i
                        className="ri-arrow-up-double-line text-2xl text-red-500"
                        aria-label="High priority"
                        title="High priority"
                    />
                )
            case 'medium':
                return (
                    <i
                        className="ri-arrow-up-wide-line text-2xl text-yellow-500"
                        aria-label="Medium priority"
                        title="Medium priority"
                    />
                )
            case 'low':
                return (
                    <i
                        className="ri-arrow-down-wide-line text-2xl text-blue-900"
                        aria-label="Low priority"
                        title="Low priority"
                    />
                )
            default:
                return null
        }
    }

    const getDaysUntilDeadline = (deadline?: Date) => {
        if (!deadline) return null
        const now = new Date()
        now.setHours(0, 0, 0, 0) // Reset to start of day for accurate comparison
        const deadlineDate = new Date(deadline)
        deadlineDate.setHours(0, 0, 0, 0)
        const diffTime = deadlineDate.getTime() - now.getTime()
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays
    }

    const daysUntilDeadline = getDaysUntilDeadline(deadline)

    const getDeadlineColor = (days: number | null) => {
        if (days === null) return 'text-gray-600'
        if (days < 0) return 'text-red-600 font-semibold'
        if (days === 0) return 'text-orange-600 font-semibold'
        if (days <= 2) return 'text-amber-600'
        return 'text-gray-600'
    }

    return (
        <Card onClick={onClick} data-id={id} className="group shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-200">
            <div className="relative p-4">
                {/* Priority Icon - Top Left Corner */}
                {priority && (
                    <div className="absolute top-3 right-3 opacity-80 group-hover:opacity-100 transition-opacity">
                        {getPriorityIcon(priority)}
                    </div>
                )}

                {/* Header with Checkbox and Title */}
                <div className="flex items-start gap-3 mb-2">
                    {/* Checkbox */}
                    <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={handleCheckboxChange}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer transition-all hover:scale-110"
                        aria-label="Mark task as complete"
                    />

                    {/* Title */}
                    <div className="flex-1 pr-8">
                        <h3 className={`text-gray-900 font-semibold text-base leading-snug transition-all ${isCompleted ? 'line-through text-gray-500' : ''
                            }`}>
                            {title || "Untitled Task"}
                        </h3>
                    </div>
                </div>

                {/* Description */}
                <div className="pl-7 mb-3">
                    <p className={`text-gray-600 text-sm leading-relaxed transition-all ${isCompleted ? 'line-through text-gray-400' : ''
                        }`}>
                        {content}
                    </p>
                </div>

                {/* Footer with metadata */}
                <div className="pl-7 flex items-center gap-2 flex-wrap">
                    {/* Due date */}
                    {daysUntilDeadline !== null && (
                        <div className={`flex items-center gap-1.5 text-xs ${getDeadlineColor(daysUntilDeadline)}`}>
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span>
                                {daysUntilDeadline === 0 ? 'Due Today' :
                                    daysUntilDeadline === 1 ? 'Due Tomorrow' :
                                        daysUntilDeadline < 0 ? `Overdue by ${Math.abs(daysUntilDeadline)} day${Math.abs(daysUntilDeadline) !== 1 ? 's' : ''}` :
                                            `Due in ${daysUntilDeadline} day${daysUntilDeadline !== 1 ? 's' : ''}`}
                            </span>
                        </div>
                    )}

                    {/* Category tag */}
                    {category && (
                        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-indigo-100 transition-colors">
                            {category}
                        </span>
                    )}

                    {/* Created date */}
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs ml-auto">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>
                            {createdAt.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    )
}