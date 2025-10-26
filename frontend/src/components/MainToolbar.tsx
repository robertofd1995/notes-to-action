export interface ToolbarProps {
    onMicrophoneClick?: () => void
    onKeyboardClick?: () => void
    className?: string
}

export function MainToolbar({
    onMicrophoneClick,
    onKeyboardClick,
    className = "",
}: ToolbarProps) {
    return (
        <div
            className={`inline-flex gap-1 items-center justify-center px-4 py-2 rounded-[32px] bg-[#EADDFF] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15),0px_1px_3px_0px_rgba(0,0,0,0.3)] ${className}`}
        >
            {/* Microphone Button */}
            <button
                onClick={onMicrophoneClick}
                className="flex items-center justify-center w-12 h-12 hover:opacity-80 transition-opacity bg-transparent border-0 p-0"
                aria-label="Microphone"
            >
                <div className="flex items-center justify-center w-10 h-10 rounded-full transition-colors">
                    <i className="ri-mic-line text-2xl text-[#4F378A]"></i>
                </div>
            </button>

            {/* Keyboard Button */}
            <button
                onClick={onKeyboardClick}
                className="flex items-center justify-center w-12 h-12 hover:opacity-80 transition-opacity bg-transparent border-0 p-0"
                aria-label="Keyboard"
            >
                <div className="flex items-center justify-center w-10 h-10 rounded-full transition-colors">
                    <i className="ri-keyboard-line text-2xl text-[#4F378A]"></i>
                </div>
            </button>
        </div>
    )
}
