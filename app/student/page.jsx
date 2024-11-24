// Images and Icons
import CanvasBg from "../../public/assets/canvas-bg.jpg";

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
        <>
            <div className="flex sm:items-center sm:flex-row flex-col sm:gap-0 md:justify-between w-full p-5 border-b-2">
                <h1 className="text-3xl ml-0 sm:ml-2 font-bold text-[#912A3E]">
                    Student Portal
                </h1>
                <p className="mr-4 text-lg text-gray-600">
                    {`${getGreeting()}, Ertug`} 👋
                </p>
            </div>
            <div className="w-full h-full flex lg:flex-row flex-col lg:justify-between">
                <div
                    style={{ flexBasis: "content" }}
                    className="h-full w-full flex flex-wrap justify-center gap-12  py-8 bg-blue-300"
                >
                    <div
                        className="h-[160px] w-[320px] md:w-[300px] bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://students.brock.ac.uk/images/img_links/notebook-1814343_1280.jpg')",
                        }}
                    >
                        PageCard
                    </div>
                    <div
                        className="h-[160px] w-[320px] md:w-[300px] bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://students.brock.ac.uk/images/img_links/time-699965_1280.jpg')",
                        }}
                    >
                        PageCard
                    </div>
                    <div
                        className="h-[160px] w-[320px] md:w-[300px] bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://students.brock.ac.uk/images/img_links/open-book-1428428_1280.jpg')",
                        }}
                    >
                        PageCard
                    </div>
                    <div
                        className="h-[160px] w-[320px] md:w-[300px] bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://students.brock.ac.uk/images/img_links/man-3653346_1280.jpg')",
                        }}
                    >
                        PageCard
                    </div>
                    <div
                        className="h-[160px] w-[320px] md:w-[300px] bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://students.brock.ac.uk/images/img_links/signature-962355_1280.jpg')",
                        }}
                    >
                        PageCard
                    </div>
                    <div
                        className="h-[160px] w-[320px] md:w-[300px] bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://png.pngtree.com/thumb_back/fh260/background/20240418/pngtree-payroll-overtime-binder-data-finance-report-business-with-graph-analysis-in-image_15659967.jpg')",
                        }}
                    >
                        PageCard
                    </div>
                </div>
                <div className="w-[100%]  md:w-[90%] h-50 bg-green-300">
                    Timetable
                </div>
            </div>
        </>
    );
}
