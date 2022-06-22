import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/userService';

export const getUserProfile = createAsyncThunk(
    'users/profile',
    async ({ company_id }, { rejectWithValue }) => {
        try {
            const { results } = await userService.getUserProfile(company_id);
            return results;
        } catch (err) {
            let error = err; // cast the error for access
            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    }
);

export const getAllTasks = createAsyncThunk(
    'users/tasks',
    async ({ company_id }, { rejectWithValue }) => {
        try {
            const response = await userService.getAllTasks(company_id);
            return response;
        } catch (err) {
            let error = err; // cast the error for access
            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    }
);

export const addTask = createAsyncThunk(
    'users/addTask',
    async (
        {
            company_id,
            assigned_user,
            task_date,
            task_time,
            is_completed,
            time_zone,
            task_msg
        },
        { rejectWithValue }
    ) => {
        try {
            const response = await userService.addTask(
                company_id,
                assigned_user,
                task_date,
                task_time,
                is_completed,
                time_zone,
                task_msg
            );
            return response;
        } catch (err) {
            let error = err; // cast the error for access
            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateTask = createAsyncThunk(
    'users/update',
    async ({ taskId, company_id }, { rejectWithValue }) => {
        try {
            const { data } = await userService.updateTask(taskId, company_id);
            return data;
        } catch (err) {
            let error = err; // cast the error for access
            if (!error.response) {
                throw err;
            }
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    users: {},
    tasks: {},
    addTask: {},
    update: {},
    error: null
};

const createApplicationSlice = createSlice({
    name: 'Application',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserProfile.fulfilled, (state, { payload }) => {
            state.users = payload;
        });
        builder.addCase(getUserProfile.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload.errorMessage;
            } else {
                state.error = action.error.message;
            }
        });
        builder.addCase(getAllTasks.fulfilled, (state, { payload }) => {
            state.tasks = payload;
        });
        builder.addCase(getAllTasks.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload.errorMessage;
            } else {
                state.error = action.error.message;
            }
        });
        builder.addCase(addTask.fulfilled, (state, { payload }) => {
            state.addTask = payload;
        });
        builder.addCase(addTask.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload.errorMessage;
            } else {
                state.error = action.error.message;
            }
        });
        builder.addCase(updateTask.fulfilled, (state, { payload }) => {
            state.update = payload;
        });
        builder.addCase(updateTask.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload.errorMessage;
            } else {
                state.error = action.error.message;
            }
        });
    }
});

const { reducer } = createApplicationSlice;

export default reducer;
