import avatar from "../../assets/3_Data/Lab_05/Avatar 313.png";
import question from "../../assets/3_Data/Lab_05/Question 1.png";
import search from "../../assets/3_Data/Lab_05/Search.png";
import bell from "../../assets/3_Data/Lab_05/Bell 1.png";

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-5 bg-white shadow-md color-black-700">
            <div className="text-2xl font-bold text-pink-500 ">DASHBOARD</div>

            <div className="flex items-center gap-3 ">
                <div className="relative">
                    <img
                        src={search}
                        alt="Search Icon"
                        className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-3 py-2 w-64 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
                    />
                </div>
                <img src={bell} alt="Bell" />
                <img src={question} alt="Question" />
                <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
            </div>
        </header>
    );
}

export default Header;