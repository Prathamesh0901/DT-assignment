import { useState } from 'react'
import './styles/JourneyBoard.css'
import { NavigateBefore, NavigateNext } from '@mui/icons-material'

export default function JourneyBoard({ task }) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`j-board ${isOpen? 'open': ''}`}>

            <div className="j-heading">
                <p>Journey Board</p> <button className='btn' onClick={toggle}>{isOpen? <NavigateBefore fontSize='large'/>: <NavigateNext fontSize='large'/>}</button>
            </div>

            <div className="j-content">

                <ul>

                    <li><h3>{task.task_title}</h3></li>

                    {
                        task.assets.map(asset => (
                            <li key={asset.asset_id}>{asset.asset_title}</li>
                        ))
                    }

                </ul>

            </div>

        </div>
    )
}