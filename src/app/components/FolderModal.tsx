export default function FolderModal(
    {showModal, handleModal}
        :
        {showModal:boolean,
        handleModal: () => void}){
    return(
        showModal &&
        <section
            draggable={true}
            className={"cursor-move absolute w-[1024px] rounded-2xl bg-[rgb(41,36,35)] h-[512px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6 text-white resize overflow-auto min-h-[512px] min-w-[512px] max-w-[1500px] max-h-[900px]"}>
            <div className="h-10 bg-[#2c2c2c] rounded-t-xl flex items-center px-4">
                <div className="flex gap-2">
                    <button
                        onClick={handleModal}
                        className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600"
                    />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
                    <div className="w-3 h-3 bg-green-500 rounded-full"/>
                </div>
                <span className="text-white/70 text-sm ml-4">
                     About Me
                 </span>
            </div>
            <section className={"px-6"}>
                <h2 className="text-xl font-bold mb-2">David Bakare</h2>
                <p className="text-gray-400">Software Developer</p>
            </section>
            <section className={"px-6"}>
                <h3 className="text-lg font-semibold mb-2">Experience</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-medium">Core Platform Engineer at Remita</h4>
                        <p className="text-sm text-gray-400">April - October, 2024 (Internship)</p>
                        <p className="text-sm">Built scalable enterprise applications</p>
                    </div>
                    <div>
                        <h4 className="font-medium">Full Stack Developer at Allcast</h4>
                        <p className="text-sm text-gray-400">March - June, 2024</p>
                        <p className="text-sm">Led development of company applications</p>
                    </div>
                </div>
            </section>
            <section className={"px-6"}>
                <h3 className="text-lg font-semibold mb-2">More</h3>
                <div className={"flex flex-row gap-4"}>
                    <a href={"./"} className="underline text-sm">Resume</a>
                    <a href={"./"} className="underline text-sm">GitHub</a>
                </div>
            </section>
        </section>
    )
}