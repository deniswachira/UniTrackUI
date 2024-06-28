import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import subjectOptions from "../assets/subject.json";
import wretch from "wretch";
import UserSidebar from '../components/UserSidebar';
import { localhostURL, azureURL } from '../components/Constants';
import { useEffect } from "react";
import axios from 'axios';
import { PuffLoader } from "react-spinners";

const Profile = () => {
    const { user } = useContext(Context);
    const [subjects, setSubjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [newScore, setNewScore] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newSubject, setNewSubject] = useState('');
    const [newSubjectGrade, setNewSubjectGrade] = useState('');
    const queryClient = useQueryClient();

    // Grade options for select dropdown
    const gradeOptions = [
        { value: 'A', label: 'A' },
        { value: 'A-', label: 'A-' },
        { value: 'B+', label: 'B+' },
        { value: 'B', label: 'B' },
        { value: 'B-', label: 'B-' },
        { value: 'C+', label: 'C+' },
        { value: 'C', label: 'C' },
        { value: 'C-', label: 'C-' },
        { value: 'D+', label: 'D+' },
        { value: 'D', label: 'D' },
        { value: 'D-', label: 'D-' },
        { value: 'E', label: 'E' },
    ];

    // Subject options for select dropdown
    // const subjectOptions = [
    //     { value: 'MAT', label: 'Mathematics' },
    //     { value: 'ENG', label: 'English' },
    //     { value: 'PHY', label: 'Physics' },
    //     { value: 'CHEM', label: 'Chemistry' },
    //     { value: 'BIO', label: 'Biology' },
    //     { value: 'HIS', label: 'History' },
    //     { value: 'GEO', label: 'Geography' },
    //     { value: 'CRE', label: 'Computer Science' },
    //     // Add more subjects as needed
    // ];


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleAddModal = () => {
        setIsAddModalOpen(!isAddModalOpen);
    };

    const openModal = (entry, index, subject) => {
        setSelectedSubject({ entry, index });
        setNewScore(entry.grade); // Initialize select with current grade
        setIsModalOpen(true);
    };

    const updateScore = async () => {
        const updatedSubjects = subjects.map((entry, index) =>
            index === selectedSubject.index ? { ...entry, grade: newScore } : entry
        );
        console.log(updatedSubjects); // Verify updatedSubjects in console

        try {
            // Update API with new data
            await wretch(`${localhostURL}/users-grades/${user._id}`)
                .put(updatedSubjects[selectedSubject.index])
                .json();

            // Update local state after successful API update
            setSubjects(updatedSubjects);
            toggleModal(); // Close modal after update
        } catch (error) {
            console.error('Error updating subject score:', error);
            // Handle error
        }
    };

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

    // Function to handle deletion of subject
    const handleDeleteSubject = async (entry, index) => {
        try {
            // Delete subject from API
            await wretch(`${localhostURL}/users-grades/${user._id}`)
                .json({ subject: entry.subject })
                .delete()// Update local state after successful API delete
            setSubjects((prev) => prev.filter((_, i) => i !== index));
        } catch (error) {
            console.error('Error deleting subject:', error);
        }
    };


    // API call for adding a subject
    const addSubject = async () => {
        try {
            const response = await axios.put(`${localhostURL}/users-grades/${user._id}`, {
                subject: newSubject,
                grade: newSubjectGrade
            });
            const data = response.data;
            console.log(data)

            // Update local state after successful API add
            setSubjects(data);
            setIsAddModalOpen(false);
            setNewSubject('');
            setNewSubjectGrade('');
        } catch (error) {
            console.error("Error adding subject:", error);
        }
    };


    return (
        <div className="flex flex-col md:flex-row">
            <UserSidebar />
            <main className="flex-1 p-6">
                <h1 className="text-4xl font-bold mb-8">User Profile</h1>

                {/* Personal Details Section */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600 mb-2"><span className="font-semibold">Name:</span> {user.firstName} {user?.lastName}</p>
                            <p className="text-gray-600 mb-2"><span className="font-semibold">School:</span> ABC High School</p>
                            <p className="text-gray-600 mb-2"><span className="font-semibold">Final Grade:</span> {user?.finalGrade}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 mb-2"><span className="font-semibold">Email:</span> {user?.email}</p>
                            <p className="text-gray-600 mb-2"><span className="font-semibold">Username:</span> {user?.userName}</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Edit Details</button>
                        </div>
                    </div>
                </div>

                {/* Subject Scores Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Subject Scores</h2>
                    <button onClick={toggleAddModal} className="bg-green-500 text-white px-4 py-2 rounded-md mb-4">Add Subject</button>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Subject
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Score
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Update
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {loading ? (
                                    <tr><td colSpan="3" className="text-center"><PuffLoader color="#19f30d" /></td></tr>
                                ) : subjects.length === 0 ? (
                                    <tr><td colSpan="3" className="text-center">No subjects found</td></tr>
                                ) : (
                                    subjects.map((entry, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{entry.subject}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.grade}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button onClick={() => openModal(entry.grade, index)} className="text-blue-500 hover:text-blue-700">Update</button>
                                                <button onClick={() => handleDeleteSubject(entry, index)} className="text-red-500 hover:text-red-700 ml-2">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Modal for Updating Scores */}
                {isModalOpen && selectedSubject && (
                    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center h-screen">
                            <div className="bg-white rounded-lg overflow-hidden shadow-xl sm:w-96">
                                <div className="bg-gray-50 px-4 py-5 sm:px-6">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Update Score</h3>
                                </div>
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <label htmlFor="score" className="block text-sm font-medium text-gray-700">{selectedSubject.entry}</label>
                                    <select
                                        id="score"
                                        value={newScore}
                                        onChange={(e) => setNewScore(e.target.value)}
                                        className="mt-1 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md"
                                    >
                                        {gradeOptions.map(option => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button onClick={updateScore} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                                        Update
                                    </button>
                                    <button onClick={toggleModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal for Adding Subjects */}
                {isAddModalOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center h-screen">
                            <div className="bg-white rounded-lg overflow-hidden shadow-xl sm:w-96">
                                <div className="bg-gray-50 px-4 py-5 sm:px-6">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Add Subject</h3>
                                </div>
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <label htmlFor="newSubject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <select
                                        id="newSubject"
                                        value={newSubject}
                                        onChange={(e) => setNewSubject(e.target.value)}
                                        className="mt-1 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md"
                                    >
                                        <option value="">Select a subject</option>
                                        {subjectOptions.map(option => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    <label htmlFor="newSubjectGrade" className="block text-sm font-medium text-gray-700 mt-4">Grade</label>
                                    <select
                                        id="newSubjectGrade"
                                        value={newSubjectGrade}
                                        onChange={(e) => setNewSubjectGrade(e.target.value)}
                                        className="mt-1 border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border rounded-md"
                                    >
                                        <option value="">Select a grade</option>
                                        {gradeOptions.map(option => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button onClick={addSubject} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                                        Add
                                    </button>
                                    <button onClick={toggleAddModal} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold">Calculate Cluster Points</h2>
                    <p className="text-gray-600">Calculate your KCSE cluster points to determine your eligibility for various university courses.</p>
                    <a href="/calculate" className="text-blue-500 mt-2 block">Go to Calculator</a>

                </div>
            </main>
        </div>
    );
};

export default Profile;
