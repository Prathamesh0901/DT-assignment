import DTLogo from '../assets/DTLogo.svg'
import HouseIcon from '@mui/icons-material/House';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConstructionIcon from '@mui/icons-material/Construction';
import './styles/Header.css'

export default function Header() {
    return (
        <div className="header">

            <div className="logo">
                <img src={DTLogo} alt="Deep Thought Logo" />
            </div>

            <div className="nav">

                <button className="home">
                    <HouseIcon />
                </button>

                <button className="settings">
                    <ConstructionIcon />
                </button>

                <button className="notifications">
                    <NotificationsIcon />
                </button>

                <button className="profile">
                    <AccountCircleIcon />
                </button>

                <button className="options">
                    <MoreVertIcon />
                </button>

            </div>

        </div>
    )
}