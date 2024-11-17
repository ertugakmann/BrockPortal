// app/page.js
export default function Student() {
    const getGreeting = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 5 && currentHour < 12) {
            return "Good Morning";
        } else if (currentHour >= 12 && currentHour < 17) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between w-full p-5 border-b-2">
                <h1 className="text-3xl ml-2 font-bold text-[#912A3E]">
                    Student Portal
                </h1>
                <p className="mr-4 text-lg text-gray-600">
                    {`${getGreeting()} Ertug`} 👋
                </p>
            </div>
        </div>
    );
}
