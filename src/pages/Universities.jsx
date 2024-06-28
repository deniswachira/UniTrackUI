import React from 'react';
import Navbar from '../components/Navbar';
import UserSidebar from '../components/UserSidebar';

const Universities = () => {
    return (
        <>
            <div className="flex flex-row mt-60px sm:h-fit md:h-full bg-base-200">
                <UserSidebar />
                <main className="container mx-auto p-6">
                    <h1 className="text-3xl font-semibold mb-6">University Details</h1>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-gray-100 border-b border-gray-300">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Institution Type</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parent Ministry</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">1</td>
                                    <td className="px-6 py-4 whitespace-nowrap">ABERDARE TTC</td>
                                    <td className="px-6 py-4 whitespace-nowrap">ABERDARE TEACHERS TRAINING COLLEGE</td>
                                    <td className="px-6 py-4 whitespace-nowrap">College</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Ministry of Education</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">2</td>
                                    <td className="px-6 py-4 whitespace-nowrap">ABERDARE TTC</td>
                                    <td className="px-6 py-4 whitespace-nowrap">ABERDARE TEACHERS TRAINING COLLEGE</td>
                                    <td className="px-6 py-4 whitespace-nowrap">College</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Ministry of Education</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">3</td>
                                    <td className="px-6 py-4 whitespace-nowrap">ABERDARE TTC</td>
                                    <td className="px-6 py-4 whitespace-nowrap">ABERDARE TEACHERS TRAINING COLLEGE</td>
                                    <td className="px-6 py-4 whitespace-nowrap">College</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Ministry of Education</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">4</td>
                                    <td className="px-6 py-4 whitespace-nowrap">ABERDARE TTC</td>
                                    <td className="px-6 py-4 whitespace-nowrap">ABERDARE TEACHERS TRAINING COLLEGE</td>
                                    <td className="px-6 py-4 whitespace-nowrap">College</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Ministry of Education</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Universities;

