export default function HeroSection() {
    return (
        <section
            className={"container mt-[4.75rem] mx-auto max-w-[90rem] w-full flex flex-wrap text-wrap flex-row justify-between items-center py-[80px] px-[40px] md:py-[80px] md:px-[64px] lg:py-[128px] lg:px-[80px]"}>
            <h1 className={"text-[2.25rem] md:text-[3.25rem] lg:text-[4rem] max-w-[64rem] leading-[1.05] font-semibold"}>
                I’m David—a software engineer with <span className={"dark:text-[#999] text-[#757575] bg-transparent"}>2.5 years experience building software.</span>
            </h1>
        </section>
    );
}
