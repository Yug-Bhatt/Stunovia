const API_BASE_URL = "http://localhost:8000";

export const getOpportunities = async () => {
    const response = await fetch(
        `${API_BASE_URL}/api/opportunities/`
    );

    if (!response.ok) {
        throw new Error(
            `Failed to fetch opportunities (${response.status})`
        );
    }

    return await response.json();
};