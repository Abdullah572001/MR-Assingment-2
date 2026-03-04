import React from 'react';
import { toast } from 'react-toastify';

const Task = ({title, resolved, setResolved, removeFromTask}) => {

    const handleResolved = () => {
        setResolved([...resolved, title]);
        removeFromTask(title);
        toast("Task marked as resolved")
    }

    return (
        <div className='p-4 bg-white rounded space-y-3'>
            <h2>{title}</h2>
            <button
            onClick={handleResolved}
             className='btn w-full bg-[#02A53B]'>Complete</button>
        </div>
    );
};

export default Task;