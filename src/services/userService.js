import slooveApi from './api';

const getUserProfile = async (company_id) => {
    const response = await slooveApi.get(
        `/team?product=outreach&company_id=${company_id}`
    );
    return response.data;
};

const getAllTasks = async (company_id) => {
    const response = await slooveApi.get(
        `/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`
    );
    return response.data;
};

const getSingleTasks = async (task_id_from_previous_test, company_id) => {
    const response = await slooveApi.get(
        `task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id_from_previous_test}?company_id=${company_id}`
    );
    return response.data;
};

const addTask = async (company_id) => {
    const response = await slooveApi.post(
        `/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`,
        {}
    );
    return response.data;
};

const updateTask = async (taskId, company_id) => {
    const response = await slooveApi.put(
        `/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${taskId}?company_id=${company_id}`
    );
    return response.data;
};

const deleteTask = async (taskId, company_id) => {
    const response = await slooveApi.put(
        `/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${taskId}?company_id=${company_id}`
    );
    return response.data;
};

const userService = {
    addTask,
    getAllTasks,
    getSingleTasks,
    updateTask,
    deleteTask,
    getUserProfile
};

export default userService;
