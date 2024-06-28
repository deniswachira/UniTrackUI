import React, { useState } from 'react';
import UserSidebar from '../components/UserSidebar';

const Courses = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCluster, setSelectedCluster] = useState('');

    const initialCourses = [
        {
            name: "Cluster 1 (Law)",
            subjectsRequired: [
                "ENG/KIS B",
                "MAT ALT A/B/ANY",
                "Any GROUP II",
                "Any GROUP II/2nd GROUP III/ANY GROUP IV/ANY",
            ],
            courses: [
                "Bachelor of Laws (LL.B.)"
            ]
        },
        {
            name: "Cluster 2 (Business, Hospitality, and Related)",
            subjectsRequired: [
                "ENG/KIS B",
                "MAT ALT A/B/ANY",
                "Any GROUP II",
                "Any GROUP II/2nd GROUP III/ANY GROUP IV/ANY",
            ],
            courses: [
                "BACHELOR OF COMMERCE",

                "BACHELOR OF COMMERCE(B.COM)",

                "BACHELOR OF COMMERCE(B.COM)",

                "BACHELOR OF SCIENCE(RECORDS MANAGEMENT AND INFORMATION TECHNOLOGY)",

                "BACHELOR OF SCIENCE(INFORMATION SCIENCE)",

                "BACHELOR OF SCIENCE(INFORMATION SCIENCES AND KNOWLEDGE MANAGEMENT)",

                "BACHELOR OF SCIENCE(INFORMATION SCIENCES)",

                "BACHELOR OF SCIENCE IN INFORMATION SCIENCE",

                "BACHELOR OF SCIENCE IN INFORMATION SCIENCES",

                "BACHELOR OF BUSINESS AND MANAGEMENT",

                "BACHELOR OF BUSINESS MANAGEMENT",

                "BACHELOR OF BUSINESS ADMINISTRATION IN MANAGEMENT"
            ]
        },
        {
            name: "Cluster 3 (Social Science, Media Studies, Fine Arts, Film, Animation and Related)",
            subjectsRequired: [
                "ENG/KIS B",
                "MAT ALT A/B/ANY",
                "Any GROUP II",
                "Any GROUP II/2nd GROUP III/ANY GROUP IV/ANY",
            ],
            courses: [

                "BACHELOR OF ARTS",

                "BACHELOR OF ARTS(WITH IT)",

                "BACHELOR OF ARTS(PSYCHOLOGY, SOCIOLOGY & POLITICAL SCIENCE)",

                "BACHELOR OF ARTS(ANTHROPOLOGY)",

                "BACHELOR OF ARTS IN ANTHROPOLOGY",

                "BACHELOR OF ARTS(CRIMINOLOGY & SECURITY STUDIES)",

                "BACHELOR OF ARTS(CRIMINOLOGY AND PENOLOGY)",

                "BACHELOR OF ARTS(CRIMINOLOGY AND SECURITY STUDIES)",

                "BACHELOR OF ARTS(CRIMINOLOGY, WITH IT)",

                "BACHELOR OF ARTS IN CRIMINOLOGY, CRIMINAL JUSTICE AND PUBLIC SAFETY",

                "BACHELOR OF CRIMINOLOGY"
            ],
        },
        {
            name: "Cluster 4 (Geosciences & related)",
            subjectsRequired: [
                "ENG/KIS B",
                "MAT ALT A/B/ANY",
                "Any GROUP II",
                "Any GROUP II/2nd GROUP III/ANY GROUP IV/ANY",
            ],
            courses: [


                "BACHELOR OF SCIENCE(METEOROLOGY)",

                "BACHELOR OF SCIENCE(GEOLOGY)",

                "BACHELOR OF SCIENCE IN GEOLOGY",

                "BACHELOR OF ENGINEERING(GEOSPATIAL ENGINEERING)",

                "BACHELOR OF SCIENCE(GEOSPATIAL ENGINEERING)",

                "BACHELOR OF SCIENCE(ASTRONOMY AND ASTROPHYSICS)",

                "BACHELOR OF SCIENCE(EARTH SCIENCE, WITH IT)",

                "BACHELOR OF ENVIRONMENTAL STUDIES(EARTH SCIENCES)",

                "BACHELOR OF SCIENCE(MINING PHYSICS)",

                "BACHELOR OF SCIENCE(GEOPHYSICS)",

                "BACHELOR OF TECHNOLOGY(GEOINFORMATION TECHNOLOGY)",

                " BACHELOR OF SCIENCE(HYDROLOGY AND WATER RESOURCES MANAGEMENT)",

                "BACHELOR OF APPLIED SCIENCE(GEO - INFORMATICS)",

                "BACHELOR OF SCIENCE(GEOPHYSICS AND MINERALOGY)",

                "BACHELOR OF SCIENCE IN GEOMATICS AND GEOSPATIAL INFORMATION SYSTEMS",

                "BACHELOR OF SCIENCE IN GEOINFORMATICS",
            ]
        },
        // Add more clusters and courses as needed
    ];

    const [filteredCourses, setFilteredCourses] = useState(initialCourses);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    // Handle search and filter
    const filterCourses = () => {
        let filtered = initialCourses;

        if (searchTerm) {
            filtered = filtered.map(cluster => ({
                ...cluster,
                courses: cluster.courses.filter(course =>
                    course.toLowerCase().includes(searchTerm.toLowerCase())
                )
            })).filter(cluster => cluster.courses.length > 0);
        }

        if (selectedCluster) {
            filtered = filtered.filter(cluster => cluster.name === selectedCluster);
        }

        setFilteredCourses(filtered);
    };

    // Trigger filter whenever search term or selected cluster changes
    React.useEffect(() => {
        filterCourses();
    }, [searchTerm, selectedCluster]);

    return (
        <div className="flex mt-20">
            <UserSidebar collapsed={collapsed} toggleCollapse={toggleCollapse} />
            <main className="flex-1 p-6">
                <h1 className="text-4xl font-bold mb-8">Courses</h1>

                {/* Search and Filter Section */}
                <div className="mb-6">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search courses..."
                        className="border border-gray-300 px-3 py-2 rounded-md w-full mb-4"
                    />
                    <select
                        value={selectedCluster}
                        onChange={(e) => setSelectedCluster(e.target.value)}
                        className="border border-gray-300 px-3 py-2 rounded-md w-full"
                    >
                        <option value="">All Clusters</option>
                        {initialCourses.map((cluster, index) => (
                            <option key={index} value={cluster.name}>
                                {cluster.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Display Courses */}
                {filteredCourses.map((cluster, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">{cluster.name}</h2>
                        {cluster.subjectsRequired.map((subject, idx) => (
                            <span key={idx} className="bg-gray-200 text-gray-800  rounded-md text-sm mr-2 mb-2">
                                {subject}
                            </span>
                        ))}
                        <ul className="list-disc list-inside">
                            {cluster.courses.map((course, idx) => (
                                <li key={idx} className="text-gray-600 mb-2">
                                    {course}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Courses;
