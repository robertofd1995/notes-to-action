export interface AppBarProps {
    onDrawerClick?: () => void
    onSearchClick?: () => void
    onSearchIconClick?: () => void
    onProfileClick?: () => void
    searchPlaceholder?: string
    profileInitial?: string
    className?: string
}

export function AppBar({
    onDrawerClick,
    onSearchClick,
    onSearchIconClick,
    onProfileClick,
    searchPlaceholder = "Ask AI",
    profileInitial = "A",
    className = "",
}: AppBarProps) {
    return (
        <div className={`w-full flex justify-center ${className}`}>
            <div className="flex items-center gap-2 px-1 py-2 w-full max-w-4xl">
            {/* Leading Icon - Drawer/Menu Button */}
            <button
                onClick={onDrawerClick}
                className="flex items-center justify-center w-14 h-14 bg-transparent border-0 p-0 hover:opacity-80 transition-opacity shrink-0"
                aria-label="Open menu"
            >
                <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/[0.02] active:bg-black/[0.04] transition-colors">
                    <i className="ri-menu-line text-2xl text-[#1D1B20]"></i>
                </div>
            </button>

            {/* Search Bar Container */}
            <div className="flex-1 flex items-center justify-center px-2">
                <div className="relative flex items-center w-full h-14 bg-[#F3EDF7] rounded-[28px]">
                    {/* Search Input Area */}
                    <button
                        onClick={onSearchClick}
                        className="flex-1 flex items-center h-full px-5 bg-transparent border-0 text-left hover:opacity-90 transition-opacity cursor-pointer rounded-[28px]"
                        aria-label="Search"
                    >
                        <span className="text-[#49454F] text-base font-normal">
                            {searchPlaceholder}
                        </span>
                    </button>

                    {/* Search Icon Button */}
                    <div className="absolute right-1 top-1/2 -translate-y-1/2">
                        <button
                            onClick={onSearchIconClick}
                            className="flex items-center justify-center w-12 h-12 bg-transparent border-0 p-0 hover:opacity-80 transition-opacity"
                            aria-label="Search"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/[0.02] active:bg-black/[0.04] transition-colors">
                                <i className="ri-sticky-note-line text-2xl text-[#1D1B20]"></i>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile Avatar Button */}
            <button
                onClick={onProfileClick}
                className="flex items-center justify-center w-12 h-12 bg-transparent border-0 p-0 hover:opacity-80 transition-opacity shrink-0"
                aria-label="Profile"
            >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#6750A4] text-white text-base font-medium">
                    {profileInitial}
                </div>
            </button>
            </div>
        </div>
    )
}
