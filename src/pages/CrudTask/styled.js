import styled from 'styled-components';

const TaskWrapper = styled.div`
    padding: 3.5rem 6rem;

    .cform {
        border: 1px solid #ccc;
        width: 30%;
    }
`;

export const AddTaskDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid #fff;
    width: 300px;
    background: #fef9f8;

    h6 {
        font-size: 20px;
        width: 100%;
        padding: 0;
        margin-bottom: 0;
        padding: 10px;
    }

    button {
        padding: 0 10px;
        margin: 0;
        border: 1px solid #ccc;
        font-size: 26px;
        padding: 5px 14px;
        cursor: pointer;
        background: #fef9f8;
    }
`;
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export default TaskWrapper;
