import React, { useState, useEffect, useContext } from 'react';
import UserSidebar from '../components/UserSidebar';
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import wretch from "wretch";
import { PuffLoader } from "react-spinners";
import { localhostURL, azureURL } from '../components/Constants';


const CalculatePoints = () => {

    const { user, dispatch } = useContext(Context);
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(false); // Add loading state


    // API call for getting a subjects
    useEffect(() => {
        const fetchSubjects = async () => {
            setLoading(true); // Set loading state to true
            try {
                const response = await wretch(`${localhostURL}/users-grades/${user._id}`) // Replace with your API endpoint
                    .get()
                    .json();
                setSubjects(response); // Update subjects state with fetched data
                // console.log(response);
            } catch (error) {
                console.error('Error fetching subjects:', error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchSubjects();
    }, [user._id]);

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
                <h1 className="text-4xl font-bold mb-8">CLuster </h1>

                {/* Subject Details Section */}
                <div className="bg-dark-200 shadow-md rounded-lg p-6 mb-6 w-full">
                    <h1 className="text-4xl font-bold mb-8 text-green-400">Cluster Calculator Page</h1>
                    <div className="grid grid-row md:grid-row ">
                        <div className="bg-dark-200 shadow-md rounded-lg p-6 w-full">
                            {/* <h2 className="text-2xl font-semibold mb-4">Subject Scores</h2> */}
                            <div className="overflow-x-auto bg-blend-darken">
                                <table className="min-w-full divide-y divide-gray-200 bg-dark-200">
                                    <thead className="bg-dark-200">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-500 uppercase tracking-wider">
                                                Subject
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-500 uppercase tracking-wider">
                                                Score
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody className="bg-dark-200 divide-y divide-gray-200">
                                        {loading ? (
                                            <tr><td colSpan="3" className="text-center"><PuffLoader color="#19f30d" /></td></tr>
                                        ) : subjects.length === 0 ? (
                                            <tr><td colSpan="3" className="text-center text-green-400">No subjects found</td></tr>
                                        ) : (
                                            subjects.map((entry, index) => (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gwhite-900">{entry.subject}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-lg text-blue-500">{entry.grade}</td>

                                                </tr>
                                            )
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Cluster Selection */}
                        <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
                            <h2 className="text-2xl font-bold mb-4 text-green-400">Select Cluster</h2>
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
                    </div>
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
