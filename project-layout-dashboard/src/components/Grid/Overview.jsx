import React from 'react';

const Overview = () => {

    return (
        <div className="mb-6">
            <h2 className="text-lg font-bold flex items-center space-x-2">
                <span className="text-pink-500">▍</span> <span>Overview</span>
            </h2>
            <div className="grid grid-cols-3 gap-6 mt-4 text-black">
                <div className="p-6 rounded-lg shadow-md bg-red-200">
                    <h3 className="text-gray-500">TURNOVER</h3>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-green-200">
                    <h3 className="text-gray-500">PROFIT</h3>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-blue-200">
                    <h3 className="text-gray-500">NEW CUSTOMERS</h3>
                </div>
            </div>
        </div>
    );
}

export default Overview;
