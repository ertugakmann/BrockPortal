import PageCard from "@/components/StudentPage/PageCard";

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
            <div className="flex sm:items-center sm:flex-row flex-col sm:gap-0 justify-between w-full p-5 border-b-2">
                <h1 className="text-3xl ml-0 sm:ml-2 font-bold text-[#912A3E]">
                    Student Portal
                </h1>
                <p className="mr-4 text-lg text-gray-600">
                    {`${getGreeting()} Ertug`} 👋
                </p>
            </div>
            <div className="w-full h-full flex justify-between">
                <div className="w-[50%] flex flex-wrap h-50 gap-4 pl-6 bg-blue-300">
                    <div>
                        <PageCard />
                    </div>
                    <div>
                        <PageCard />
                    </div>
                    <div>
                        <PageCard />
                    </div>
                    <div>
                        <PageCard />
                    </div>
                </div>
                <div className="w-[50%] h-50 bg-green-300">Timetable</div>
            </div>
        </div>
    );
}
