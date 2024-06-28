import React, { useState, useEffect } from 'react';
import UserSidebar from '../components/UserSidebar';
import axios from 'axios';

const CalculatePoints = () => {
    const subjects = [
        { name: 'Math', grade: 'A' },
        { name: 'Eng', grade: 'B' },
        { name: 'Phy', grade: 'C' },
        { name: 'Chem', grade: 'A' },
        { name: 'Bio', grade: 'B' },
    ];

    // Fetch subjects from the backend
    // useEffect(() => {
    //     const fetchSubjects = async () => {
    //         try {
    //             const response = await axios.get('/api/subjects');
    //             setSubjects(response.data);
    //         } catch (error) {
    //             console.error('Error fetching subjects:', error);
    //         }
    //     };
    //     fetchSubjects();
    // }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCluster, setSelectedCluster] = useState('');
    // const [subjects, setSubjects] = useState([]);
    const [result, setResult] = useState(null);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleCalculate = async () => {
        try {
            const response = await axios.post('/api/calculate-cluster-points', subjects);
            setResult(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex w-full">
            <UserSidebar />
            <main className="flex-1 p-6">
                <h1 className="text-4xl font-bold mb-8">User Profile</h1>

                {/* Subject Details Section */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
                    <h1 className="text-4xl font-bold mb-8">Cluster Calculator Page</h1>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                        {subjects.map((subject, index) => (
                            <div key={index} className="col-span-1">
                                <p className="text-gray-600 mb-2">
                                    <span className="font-semibold">{subject.name}:</span> {subject.grade || 'N/A'}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cluster Selection */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
                    <h2 className="text-2xl font-semibold mb-4">Select Cluster</h2>
                    <select
                        value={selectedCluster}
                        onChange={(e) => setSelectedCluster(e.target.value)}
                        className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    >
                        <option value="cluster1">Cluster 1 (Law)</option>
                        <option value="cluster2">Cluster 2 (Business, Hospitality, and Related)</option>
                        <option value="cluster3">Cluster 3 (Social Science, Media Studies, Fine Arts, Film, Animation and Related)</option>
                        <option value="cluster4">Cluster 4 (Geosciences & related)</option>
                        <option value="cluster5">Cluster 5 (Law)</option>
                        <option value="cluster6">Cluster 6 (Law)</option>
                        <option value="cluster7">Cluster 7 (Law)</option>
                        {/* Add more clusters as needed */}
                    </select>
                </div>

                {/* Subject Scores Section */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
                    <h2 className="text-2xl font-semibold mb-4">Cluster Requirement</h2>
                    <p>Cluster Selection: A dropdown menu allows the student to select the cluster </p>
                    <p>Cluster Selection: A dropdown menu allows the student to select the cluster </p>
                    <p>Cluster Selection: A dropdown menu allows the student to select the cluster </p>
                    <div className="mt-4 flex justify-end">
                        <button onClick={handleCalculate} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Calculate Cluster Points
                        </button>
                    </div>
                </div>

                {/* Display Results */}
                {result && (
                    <div className="bg-white shadow-md rounded-lg p-6 w-full">
                        <h2 className="text-2xl font-semibold mb-4">Cluster Points</h2>
                        <p>Total Cluster Points: {result.clusterPoints}</p>
                        <div className="mt-4">
                            {Object.entries(result.highestScores).map(([cluster, score], index) => (
                                <p key={index} className="text-gray-600">
                                    <span className="font-semibold">{cluster}:</span> {score}
                                </p>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CalculatePoints;
