import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import './styles/MethodComponent.css'

export default function MethodComponent() {
    return(
        <div className="method">

            <div className="introduction">

                <div className="i-heading">
                    <KeyboardArrowUp /><h3>Introduction</h3>
                </div>

                <div className="i-content">
                    <p>The 4SA Method, How to bring a idea into progress ?</p>
                    <a>See More</a>
                </div>

            </div>

            <div className="m-thread">

                <div className="t-heading">
                    <KeyboardArrowUp /><h3>Thread A</h3>
                </div>

                <div className="t-content">

                    <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                    <a>See More</a>

                    <div className="example">
                        <div className="e-heading">
                            <h3>Example 1</h3>
                        </div>
                        <div className="e-content">
                            <p>You have a concept , How will you put into progress?</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}