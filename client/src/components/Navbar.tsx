import {Link} from "react-router-dom"
import { FaUserFriends } from "react-icons/fa"
import { IoMdChatbubbles } from "react-icons/io"
import { BsSearch } from "react-icons/bs"
import { BsClockHistory } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { BsPersonFill } from "react-icons/bs" 

const Navbar = () => {

    const navigate = useNavigate();
    const [searchQuery, setSearchQuery ] = useState("");
    const [crossAppear, setCrossAppear] = useState(false);

    const handleCrossClick = () => {
     setSearchQuery("");  
     setCrossAppear(false); 
    }

    useEffect(() => {
        if (searchQuery) {
            navigate(`/search?query=${searchQuery}`);
            
        // // Cleanup function
        return () => {
            navigate('/search')
        }
        }
        
    }, [searchQuery]);

  return (
    <nav className="sticky hidden sm:flex top-0 left-0 right-0 mx-3 border-b-2 border-gray-500 border-dashed h-[60px]">
    <div className="flex items-center w-full h-full mx-2 justify-between gap-3">
       

       {/* Logo */}
        <Link to="/">
        <img src="/logo.png" alt="logo" className="h-[50px] w-[50px] hover:opacity-80"/>
        </Link>

        
        {/* Search Bar */}
        <div className="md:max-w-[400px] flex-1 sm:max-w-[300px] flex items-center px-3 py-1 rounded-xl border-gray-500 border-2 gap-2 bg-white">
             <BsSearch />
            <input 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
                navigate("/search");
                setCrossAppear(true);
            }}
            type="text" 
            placeholder="Search..." 
            className="flex-1 outline-none outline-0 ring-0"/>
            <RxCross2 
            onClick={handleCrossClick}
            className={`${crossAppear ? "cursor-pointer hover:opacity-80" : "hidden"}`} />
        </div>

          {/* Navigation options */}
        <div className="flex items-center gap-5 mx-2">

            <Link to="/profile">
            <div className="cursor-pointer flex flex-col items-center hover:opacity-80 text-black">
                <BsPersonFill className="w-[30px] h-[30px]"/>
                <p className="text-[10px]">Profile</p>
            </div>
            </Link>
            
            <Link to="/buddies">
            <div className="cursor-pointer flex flex-col items-center hover:opacity-80 text-black">
                <FaUserFriends className="w-[30px] h-[30px]"/>
                <p className="text-[10px]">Buddies</p>
            </div>
            </Link>

            <Link to="/rooms">
            <div className="cursor-pointer flex flex-col items-center hover:opacity-80 text-black">
                <AiFillHome className="w-[30px] h-[30px]"/>
                <p className="text-[10px]">Rooms</p>
            </div>
            </Link>

            <Link to="/chats">
            <div className="cursor-pointer flex flex-col items-center hover:opacity-80 text-black">
                <IoMdChatbubbles className="w-[30px] h-[30px]"/>
                <p className="text-[10px]">Chats</p>
            </div>
            </Link>

            <Link to="/recent">
            <div className="cursor-pointer flex flex-col items-center hover:opacity-80 text-black">
                <BsClockHistory className="w-[30px] h-[30px]"/>
                <p className="text-[10px]">Recent</p>
            </div>
            </Link>

        </div>

    </div>
    </nav>
  )
}

export default Navbar