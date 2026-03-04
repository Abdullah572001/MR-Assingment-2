import React, { use } from "react";
import Ticket from "./Ticket";
import Task from "../Task/Task";

const Tickets = ({ ticketsPromise, task, setTask, resolved, setResolved }) => {

    let tickets = use(ticketsPromise);
    // console.log(tickets);
    // console.log(task)
    const removeFromTask = (titleRemove) => {
        const newTask = task.filter(title => title !== titleRemove);
        setTask(newTask);
    }

    const newTickets = tickets.filter(ticket => !resolved.includes(ticket.issue_title));

  return (
    <div className="max-w-350 mx-auto px-3 lg:px-0 mt-15">
      <h2 className="text-2xl font-bold mb-3">Customer Tickets</h2>

      {/* Tickets container */}
      <div className="flex gap-8 flex-col-reverse lg:flex-row mt-10 lg:mt-0">
        {/* tickets card container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-3/4">
            {
                newTickets.map(ticket => <Ticket task={task} setTask={setTask} key={ticket.id} ticket={ticket}></Ticket>)
                
            }
        </div>
            
        {/* task status */}
        <div className="lg:w-1/4">
            <div className="space-y-3">
                <h2 className="text-xl font-bold">Task Status</h2>
                {
                    task[0] ? task.map((title, index) => <Task 
                    key={index} 
                    title={title}
                    resolved={resolved}
                    setResolved={setResolved}
                    removeFromTask={removeFromTask}
                    ></Task> ) : <p className="text-gray-400">Select a ticket to add to Task Status</p>
                }
            </div>
            <div className="space-y-3 mt-6">
                <h2 className="text-xl font-bold">Resolved Task</h2>
                {
                    resolved[0] ? resolved.map((title, index) => <p key={index} className="px-3 py-5 bg-[#E0E7FF] rounded">{title}</p> ) : <p className="text-gray-400">No resolved tasks yet.</p>
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
