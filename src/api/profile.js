const API_BASE_URL = "http://localhost:8000";


export const getStudentProfile = async (profileId) => {
    const response = await fetch(
        `${API_BASE_URL}/api/profile/${profileId}`
    );


    if (!response.ok) {
        throw new Error(
            `Failed to fetch student profile (${response.status})`
        );
    }


    return await response.json();
};