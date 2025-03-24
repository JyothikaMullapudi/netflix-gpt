const VideoTitle = ({title,overview})=>{

    return(<div className=" absolute text-white bg-gradient-to-r from-black py-50 px-10">
        <h1 className="font-bold text-6xl ">{title}</h1>
        <p className="w-1/3 ">{overview}</p>
        <div className="py-4 mx-10">
            <button className="border-1 px-4 mx-8 py-3  bg-black opacity-80 rounded-lg text-white cursor-pointer hover:opacity-50">▶️   Play Now</button>
            <button className="border-1 px-4 py-3  bg-white opacity-80 rounded-lg text-black cursor-pointer hover:opacity-50">ℹ️  More Info</button>
        </div>
    </div>);
}

export default VideoTitle;