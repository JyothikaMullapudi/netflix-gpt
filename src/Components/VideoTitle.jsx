const VideoTitle = ({title,overview})=>{

    return(<div className=" absolute text-white bg-gradient-to-r from-black py-20 md:py-50 px-10">
        <h1 className="font-bold md:text-6xl text-3xl ">{title}</h1>
        <p className="w-1/3 hidden md:inline-block ">{overview}</p>
        <div className="py-4 md:mx-10 mx-2">
            <button className="border-1 m-auto md:px-4 md:mx-8 md:py-3 py-2 bg-black opacity-80 rounded-lg text-white cursor-pointer hover:opacity-50">▶️   Play Now</button>
            <button className="hidden md:inline-block border-1 px-4 md:py-3 py-2 bg-white opacity-80 rounded-lg text-black cursor-pointer hover:opacity-50">ℹ️  More Info</button>
        </div>
    </div>);
}

export default VideoTitle;