import Button from "./button"

const Story = () => {
    return (
        <>
            <div className="session">
                <div className="main-text text-center max-w-4xl mx-auto text-[clamp(1rem,3vw,1.5rem)] mb-6 leading-none">
                    <div className="date text-lg text-(--text-color) text-center">
                        {
                            new Date().getFullYear()
                        }
                    </div>
                    Whether you're designing for personal projects, creative teams, or large-scale campaigns, our AI-powered platform is built to bring your ideas to life—quickly, beautifully, and intelligently.And the results? The numbers speak for themselves:
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2">

                <Card year={2014} title={"Year of establishment"} text={"More than 10 years in the field"} />
                <Card year={304} title={"Projects are launched"} text={"A lot of projects are done"} />
                <Card year={189} title={"Happy clients"} text={"Clients from all over the world"} />
                <Card year={20} title={"5-Star Reviews"} text={"More than 100 reviews are done"} />
            </div>
            <div className="mx-auto w-fit flex justify-center items-center gap-4 flex-col lg:flex-row">
                <Button variant={"primary"} text={"Get Started "} />
                <div className="text text-sm flex items-center gap-3">
                    Slots are available
                    <span className="size-2 bg-green-600 block rounded-full"></span>
                </div>
            </div>
        </>
    )
}

export default Story

const Card = ({ year, title, text }) => {
    return (
        <div>
            <div className="session flex flex-col justify-center items-center">
                <div className="date text-5xl font-semibold">
                    {year}
                </div>
                <div className="heading text-lg">

                    {title}
                </div>
                <div className="txt text-xs text-(--text-color) ">
                    {text}
                </div>
                <div className="images flex items-center">
                    <div className="sub-images flex -space-x-4">
                        <img src="/hero-r-1.png" alt="" />
                        <img src="/hero-r-2.png" alt="" />
                        <img src="/hero-r-3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}