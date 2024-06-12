import './styles/NoticeBoard.css'
import { Close } from '@mui/icons-material'

export default function NoticeBoard() {
    return (
        <div className="notice">
            <div className="n-heading">
                <div className="close"><Close></Close></div>
                <div className="n-text">
                    <p>N</p>
                    <p>o</p>
                    <p>t</p>
                    <p>i</p>
                    <p>c</p>
                    <p>e</p>
                    <p>B</p>
                    <p>o</p>
                    <p>a</p>
                    <p>r</p>
                    <p>d</p>
                </div>
            </div>
        </div>
    )
}