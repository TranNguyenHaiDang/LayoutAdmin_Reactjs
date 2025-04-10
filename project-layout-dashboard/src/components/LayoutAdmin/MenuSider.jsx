import React from 'react';
import Group from "../../assets/3_Data/Lab_05/Group.png"
import logo from "../../assets/3_Data/Lab_05/Image 1858.png"
import dashboard from "../../assets/3_Data/Lab_05/Squares four 1.png";
import folder from "../../assets/3_Data/Lab_05/Folder.png";
import groups from "../../assets/3_Data/Lab_05/Groups.png";
import chart from "../../assets/3_Data/Lab_05/Pie chart.png";
import chat from "../../assets/3_Data/Lab_05/Chat.png";
import code from "../../assets/3_Data/Lab_05/Code.png";

const MenuSider = () => {
    return (
        <div className="bg-white shadow-md flex flex-col p-6 w-64 min-h-screen">
            <div className="text-2xl font-bold text-pink-500 mb-8 flex items-center space-x-2">
                <img src={logo} alt="Logo" />
            </div>

            <nav className="space-y-4">
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
                    <img src={dashboard} alt="Dashboard" />
                    <span>Dashboard</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
                    <img src={folder} alt="Project" />
                    <span>Projects</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
                    <img src={groups} alt="Groups" />
                    <span>Teams</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
                    <img src={chart} alt="Chart" />
                    <span>Analytics</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
                    <img src={chat} alt="Message" />
                    <span>Messages</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:bg-pink-500 hover:text-white p-2 rounded-md">
                    <img src={code} alt="Code" />
                    <span>Integrations</span>
                </a>
                <div className='mt-12'>
                    <img src={Group} alt="Group" />
                </div>
            </nav>
        </div>
    );
}

export default MenuSider;