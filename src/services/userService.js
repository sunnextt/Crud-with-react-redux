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

const getSingleTasks = async (company_id, id) => {
    const response = await slooveApi.get(
        `task/lead_465c14d0e99e4972b6b21ffecf3dd691/${id}?company_id=${company_id}`
    );
    console.log(response);
    return response.data;
};

const addTask = async (
    company_id,
    assigned_user,
    task_date,
    task_time,
    is_completed,
    time_zone,
    task_msg
) => {
    const response = await slooveApi.post(
        `/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`,
        {
            assigned_user,
            task_date,
            task_time,
            is_completed,
            time_zone,
            task_msg
        }
    );
    return response.data;
};

const updateTask = async (
    task_id,
    company_id,
    assigned_user,
    task_date,
    task_time,
    is_completed,
    time_zone,
    task_msg
) => {
    const response = await slooveApi.put(
        `/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}?company_id=${company_id}`,
        {
            assigned_user,
            task_date,
            task_time,
            is_completed,
            time_zone,
            task_msg
        }
    );
    return response.data;
};

const deleteTask = async (id, company_id) => {
    const response = await slooveApi.delete(
        `/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${id}?company_id=${company_id}`
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
