import React from 'react';

const ScoreUpdateModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 rounded-md shadow-md z-10">
                <h2 className="text-2xl font-semibold mb-4">Update Scores</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-lg mb-2">English/Kiswahili</label>
                        <input type="text" className="border border-gray-300 px-3 py-2 w-full rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg mb-2">Mathematics</label>
                        <input type="text" className="border border-gray-300 px-3 py-2 w-full rounded-md" />
                    </div>
                    {/* Add inputs for other subjects */}
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
                        <button onClick={onClose} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md ml-4">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ScoreUpdateModal;
