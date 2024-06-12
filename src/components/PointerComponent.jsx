import './styles/PointerComponent.css'
import { TurnLeft, TurnRight, MoreHoriz } from '@mui/icons-material'
import open from '../assets/open.svg'

export default function PointerComponent() {

    return (
        <div className="pointer">

            <div className="p-title">

                <h3>Title</h3>

                <input type="text" />

            </div>

            <div className="p-content">

                <h3>Content</h3>

                <div className="contain">

                    <div className="options">

                        <p className='text-options'>
                            <span>Title</span>
                            <span>Edit</span>
                            <span>View</span>
                            <span>Insert</span>
                            <span>Format</span>
                            <span>Tools</span>
                            <span>Table</span>
                            <span>Help</span>
                        </p>

                        <p className='btn-options'>

                            <TurnLeft />
                            <TurnRight />
                            <img src={open} />
                            <span>Paragraph</span>
                            <MoreHoriz />

                        </p>

                    </div>

                    <textarea className='p-textarea'></textarea>

                </div>

            </div>

        </div>
    )
}