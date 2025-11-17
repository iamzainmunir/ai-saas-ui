import React from "react";

const Services = () => {
    return (
        <div className="w-full session h-full bg-[#010101]">
            <div className="max-w-[1200px] mx-auto">
                <div className="upper flex flex-col lg:flex-row items-center justify-between ">
                    <div>
                        <div className="heading text-xl lg:text-2xl">
                            Our Services &{" "}
                            <span className="text-primary"> Expertise</span>.
                        </div>
                        <div className="text text-(--text-color) text-xs lg:text-sm mt-4 ">
                            Unlock the full potential of your creativity with
                            our AI-powered design assistant. Explore new
                            dimensions of design
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/services-cube.svg"
                            className="size-[155px]"
                            alt=""
                        />
                    </div>
                </div>
                <div class="grid grid-cols-1  lg:grid-cols-3  grid-rows-2 gap-4">
                    {/* 1st Item */}
                    <div class="lg:col-span-1 duration-200 hover:shadow-[0_2px_4px_0_#FF541F,0_4px_8px_0_#FFFFFF,0_8px_20px_0_#272829B3,0_12px_30px_0_#D9D9D9D9] bg-[linear-gradient(to_top_left,var(--primary-color),rgba(39,40,41,0.7)_40%)] p-4 rounded-[20px]  flex flex-col justify-between!">
                        <div className="flex justify-between items-center">
                            <div className="text-xs text-(--text-color) w-[70%]">
                                Skip the blank canvas and spark creativity
                                instantly. Our AI generates high-quality,
                                on-brand design concepts within seconds
                            </div>
                            <div>
                                <img
                                    src="arrow.svg"
                                    className="size-[100px]"
                                    alt="Arrow"
                                />
                            </div>
                        </div>
                        <div className="text-2xl">Instant Ideation</div>
                    </div>

                    {/* 2nd Item */}
                    <div class="lg:col-span-2 duration-200 hover:shadow-[0_2px_4px_0_#FF541F,0_4px_8px_0_#FFFFFF,0_8px_20px_0_#272829B3,0_12px_30px_0_#D9D9D9D9] bg-[#272829]/70 p-4 rounded-[20px]  flex flex-col justify-between!">
                        <div className="flex justify-between items-center">
                            <div className="text-xs text-(--text-color) w-[60%]">
                                No two creators are the same, and neither are
                                their styles. Our AI learns from your inputs,
                                understands your aesthetic preferences, and
                                fine-tunes every design
                            </div>
                            <div>
                                <img
                                    src="arrow.svg"
                                    className="size-[100px]"
                                    alt="Arrow"
                                />
                            </div>
                        </div>
                        <div className="text-2xl">Smart Adaptability</div>
                    </div>
                    <div class="lg:col-span-2 duration-200 hover:shadow-[0_2px_4px_0_#FF541F,0_4px_8px_0_#FFFFFF,0_8px_20px_0_#272829B3,0_12px_30px_0_#D9D9D9D9] bg-[#272829]/70 p-4 rounded-[20px]  flex flex-col justify-between!">
                        <div className="flex justify-between items-center">
                            <div className="text-xs text-(--text-color) w-[60%]">
                                Collaborate seamlessly with your team. Share
                                designs, gather feedback, and iterate faster
                                with built-in collaboration tools.
                            </div>
                            <div>
                                <img
                                    src="arrow.svg"
                                    className="size-[100px]"
                                    alt="Arrow"
                                />
                            </div>
                        </div>
                        <div className="text-2xl">Team Collaboration</div>
                    </div>
                    <div class="lg:col-span-1 duration-200 hover:shadow-[0_2px_4px_0_#FF541F,0_4px_8px_0_#FFFFFF,0_8px_20px_0_#272829B3,0_12px_30px_0_#D9D9D9D9] bg-[linear-gradient(to_top_left,var(--primary-color),rgba(39,40,41,0.7)_40%)] p-4 rounded-[20px]  flex flex-col justify-between!">
                        <div className="flex justify-between items-center">
                            <div className="text-xs text-(--text-color) w-[70%]">
                                Skip the blank canvas and spark creativity
                                instantly. Our AI generates high-quality,
                                on-brand design concepts within seconds
                            </div>
                            <div>
                                <img
                                    src="arrow.svg"
                                    className="size-[100px]"
                                    alt="Arrow"
                                />
                            </div>
                        </div>
                        <div className="text-2xl">Seamless Revisions</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
