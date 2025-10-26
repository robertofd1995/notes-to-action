import { NoteCard } from "../components/NoteCard"
import { TaskCard } from "../components/task/TaskCard"
import { MainToolbar } from "../components/MainToolbar"
import { AppBar } from "../components/AppBar"

const cards = [
    {
        id: 1,
        title: "Card 1",
        description: "Card 1 description",
        onClick: () => console.log("Card 1 clicked"),
        createdAt: new Date(2025, 11, 1, 12, 20),
    },
    {
        id: 2,

        description: "Card 2 description",
        onClick: () => console.log("Card 2 clicked"),
        createdAt: new Date(2025, 11, 1, 12, 30),
    }
]

const taskCards = [
    {
        id: 1,
        title: "I need to finish the marketing presentation by",
        content: "I need to finish the marketing presentation by next Friday. It's high priority and needs to include Q4 metrics.",
        createdAt: new Date(2025, 0, 15), // January 15, 2025
        onClick: () => console.log("Task 1 clicked"),
        completed: false,
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
        priority: 'high' as const,
        category: 'Marketing',
    },
    {
        id: 2,
        title: "Review quarterly reports",
        content: "Need to review all quarterly reports and prepare summary for board meeting.",
        createdAt: new Date(2025, 0, 10), // January 10, 2025
        onClick: () => console.log("Task 2 clicked"),
        completed: true,
        deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 3 days from now
        priority: 'medium' as const,
        category: 'Finance',
    },
    {
        id: 3,
        title: "Review quarterly reports",
        content: "Need to review all quarterly reports and prepare summary for board meeting.",
        createdAt: new Date(2025, 0, 10), // January 10, 2025
        onClick: () => console.log("Task 2 clicked"),
        completed: true,
        deadline: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 days from now
        priority: 'medium' as const,
        category: 'Finance',
    },
    {
        id: 4,
        title: "Review quarterly reports",
        content: "Need to review all quarterly reports and prepare summary for board meeting.",
        createdAt: new Date(2025, 0, 10), // January 10, 2025
        onClick: () => console.log("Task 2 clicked"),
        completed: true,
        deadline: new Date(Date.now()), // today
        priority: 'medium' as const,
        category: 'Finance',
    },
    {
        id: 5,
        title: "Review quarterly reports",
        content: "Need to review all quarterly reports and prepare summary for board meeting.",
        createdAt: new Date(2025, 0, 10), // January 10, 2025
        onClick: () => console.log("Task 2 clicked"),
        completed: true,
        deadline: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // yesterday
        priority: 'medium' as const,
        category: 'Finance',
    }
]

export function MainPage() {

    const cardsElements = cards.map((card) => (
        <NoteCard key={card.id} id={card.id} title={card.title} content={card.description}
            createdAt={card.createdAt} onClick={card.onClick}
        />
    ))

    const taskElements = taskCards.map((task) => (
        <TaskCard key={task.id} id={task.id} title={task.title} content={task.content}
            createdAt={task.createdAt} onClick={task.onClick} completed={task.completed}
            deadline={task.deadline} priority={task.priority} category={task.category}
        />
    ))

    return (
        <div className="min-h-screen bg-white">
            {/* Fixed AppBar at the top */}
            <header className="fixed top-0 left-0 right-0 bg-white z-40 shadow-sm">
                <AppBar
                    onDrawerClick={() => console.log("Drawer clicked")}
                    onSearchClick={() => console.log("Search clicked")}
                    onSearchIconClick={() => console.log("Search icon clicked")}
                    onProfileClick={() => console.log("Profile clicked")}
                />
            </header>

            {/* Main content with padding to account for fixed header and footer */}
            <main className="pt-[72px] pb-[96px] px-6">
                <h1 className="text-2xl font-bold mb-6">Main Page</h1>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Notes</h2>
                    <div className="space-y-4">
                        {cardsElements}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">Tasks</h2>
                    <div className="space-y-4">
                        {taskElements}
                    </div>
                </div>
            </main>

            {/* Fixed MainToolbar at the bottom - centered */}
            <footer className="fixed bottom-0 left-0 right-0 z-30 pb-6 pointer-events-none">
                <div className="flex justify-center pointer-events-auto">
                    <MainToolbar
                        onMicrophoneClick={() => console.log("Microphone clicked")}
                        onKeyboardClick={() => console.log("Keyboard clicked")}
                    />
                </div>
            </footer>
        </div>
    )
}