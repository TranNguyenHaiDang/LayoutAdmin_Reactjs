import React, { useEffect, useState } from 'react';
import file from "../../assets/3_Data/Lab_05/File text 1.png";
import create from "../../assets/3_Data/Lab_05/create.png";
import download from "../../assets/3_Data/Lab_05/Download.png";
import move from "../../assets/3_Data/Lab_05/Move up.png";

const DataTable = () => {
    const [selectedAll, setSelectedAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState(Array(6).fill(false));
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://67ec9394aa794fb3222e224b.mockapi.io/report')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    const toggleAll = () => {
        const newValue = !selectedAll;
        setSelectedAll(newValue);
        setSelectedRows(Array(data.length).fill(newValue));
    };

    const toggleRow = (index) => {
        const updated = [...selectedRows];
        updated[index] = !updated[index];
        setSelectedRows(updated);
        setSelectedAll(updated.every(val => val));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 min-w-[950px]">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                    <img src={file} alt="File" className="w-6 h-6" />
                    <span className="text-lg font-bold">Detailed Report</span>
                </div>
                <div className="flex space-x-2">
                    <button className="flex items-center space-x-1.5 border border-pink-400 text-pink-500 rounded-md px-3 py-1 text-sm hover:bg-pink-50 transition">
                        <img src={download} alt="Download" className="w-4 h-4" />
                        <span>Import</span>
                    </button>
                    <button className="flex items-center space-x-1.5 border border-pink-400 text-pink-500 rounded-md px-3 py-1 text-sm hover:bg-pink-50 transition">
                        <img src={move} alt="Move" className="w-4 h-4" />
                        <span>Export</span>
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm">
                    <thead className="bg-gray-100 border-b border-gray-300 text-gray-600">
                        <tr>
                            <th className="py-3 px-4 border-r text-left">
                                <input type="checkbox" checked={selectedAll} onChange={toggleAll} />
                            </th>
                            <th className="py-3 px-4 font-semibold text-left border-r">CUSTOMER NAME</th>
                            <th className="py-3 px-4 font-semibold text-left border-r">COMPANY</th>
                            <th className="py-3 px-4 font-semibold text-left border-r">ORDER VALUE</th>
                            <th className="py-3 px-4 font-semibold text-left border-r">ORDER DATE</th>
                            <th className="py-3 px-4 font-semibold text-left border-r">STATUS</th>
                            <th className="py-3 px-4 font-semibold text-left">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="py-3 px-4 border-r">
                                    <input type="checkbox" checked={selectedRows[index]} onChange={() => toggleRow(index)} />
                                </td>
                                <td className="py-3 px-4 flex items-center space-x-3 border-r">
                                    <img
                                        src={row.avatar}
                                        alt="avatar"
                                        className="w-6 h-6 rounded-full"
                                    />
                                    <span className="font-medium">{row.customerName}</span>
                                </td>
                                <td className="py-3 px-4 border-r">{row.company}</td>
                                <td className="py-3 px-4 border-r">{row.orderValue}</td>
                                <td className="py-3 px-4 border-r">{row.oderDate}</td>
                                <td className="py-3 px-4 border-r">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${row.status === 'New'
                                            ? 'bg-blue-100 text-blue-600'
                                            : row.status === 'In-progress'
                                                ? 'bg-yellow-100 text-yellow-600'
                                                : 'bg-green-100 text-green-600'
                                            }`}
                                    >
                                        {row.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-lg text-gray-500"><img src={create} alt="Create" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                <span>63 results</span>
                <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100">
                        &lt;
                    </button>

                    {[1, 2, 3, 4].map((num) => (
                        <button
                            key={num}
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition ${num === 1
                                ? 'bg-pink-500 text-white font-bold'
                                : 'text-gray-500 hover:bg-gray-100'
                                }`}
                        >
                            {num}
                        </button>
                    ))}

                    <span className="text-gray-400 px-1">...</span>

                    {[10, 11].map((num) => (
                        <button
                            key={num}
                            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100"
                        >
                            {num}
                        </button>
                    ))}
                    <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100">
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataTable;