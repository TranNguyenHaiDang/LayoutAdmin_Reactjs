import avatar from "../../assets/3_Data/Lab_05/Avatar 313.png";
import question from "../../assets/3_Data/Lab_05/Question 1.png";
import search from "../../assets/3_Data/Lab_05/Search.png";
import bell from "../../assets/3_Data/Lab_05/Bell 1.png";

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-5 bg-white shadow-md color-black-700">
            <div className="text-2xl font-bold text-pink-500">
                Dashboard
            </div>

            <div className="flex items-center space-x-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-9 pr-3 h-9 w-[220px] text-sm border border-gray-300 rounded-full text-black placeholder-gray-400 focus:outline-none"
                    />
                    <img
                        src={search}
                        alt="Search Icon"
                        className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                </div>

                <img src={bell} alt="Bell" className="w-5 h-5 cursor-pointer" />
                <img src={question} alt="Question" className="w-5 h-5 cursor-pointer" />
                <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full cursor-pointer" />
            </div>
        </header>
    );
};

export default Header;