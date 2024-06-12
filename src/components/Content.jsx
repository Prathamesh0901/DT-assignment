import { useEffect, useState } from "react";
import Tasks from "./Tasks";
import './styles/Content.css'

export default function content({ title, content }) {

    return (
        <div className="main">

            <div className="projectInfo">

                <div className="top">

                    <div className="heading">
                        <p>{title}</p>
                    </div>

                    <button className="sbmBtn">Submit task</button>

                </div>

                {
                    content.map(task => (
                        <Tasks key={task.task_id} task={task}></Tasks>
                    ))
                }

            </div>

        </div>
    )
}