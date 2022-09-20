import './header.css'

function Header(){
    return(
        <div className="flex items-center flex-row justify-between gap-3 p-[15px] w-[100%] bg-black text-white">
            <div className="right flex flex-row items-center gap-5">
                <img src="/netflix-logo.png" alt="" className="w-[150px]"></img>
                <div className="flex flex-row gap-4">
                    <div className="">Home</div>
                    <div className="">TV Shows</div>
                    <div className="">Movies</div>
                    <div className="">Recently Added</div>
                    <div className="">My List</div>
                </div>
            </div>
            <div className="left flex flex-row items-center gap-4">
            <div className="">CD</div>
            <div className="">DVD</div>
            <div className="w-[30px] h-[30px] border-3 bg-[#c9c74e] rounded-sm"></div>
            </div>
        </div>
    );

}

export default Header