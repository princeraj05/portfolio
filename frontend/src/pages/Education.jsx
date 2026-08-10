export default function Education() {

    const education = [
        {
            title: "B.Tech – Computer Science & Engineering",
            school: "Lovely Professional University, Phagwara, Punjab",
            year: "Aug 2023 – Present",
            score: "CGPA: 6.83"
        },
        {
            title: "Intermediate (Class XII) – PCM",
            school: "Ganesh Dutt College, Begusarai, Bihar",
            year: "Apr 2021 – Mar 2023",
            score: "Percentage: 74%"
        },
        {
            title: "Matriculation (Class X)",
            school: "Janta High School, Khagaria, Bihar",
            year: "Apr 2020 – Mar 2021",
            score: "Percentage: 88%"
        }
    ];

    return (

        <section className="max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6">

            <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12">
                Education
            </h2>

            <div className="relative border-l border-purple-500">

                {education.map((item, index) => (

                    <div key={index} className="mb-10 ml-6">

                        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600"></span>

                        <div className="bg-gray-900 p-5 md:p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition">

                            <h3 className="text-base md:text-lg font-semibold">
                                {item.title}
                            </h3>

                            <p className="text-purple-400 text-sm mt-1">
                                {item.school}
                            </p>

                            <p className="text-gray-400 text-sm mt-2">
                                {item.year}
                            </p>

                            <p className="text-purple-400 text-sm mt-1">
                                {item.score}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    )

}