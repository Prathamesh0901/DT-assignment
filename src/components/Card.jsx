import { InfoRounded } from '@mui/icons-material'
import Thread from './Thread'
import PointerComponent from './PointerComponent'
import MethodComponent from './MethodComponent'
import './styles/Card.css'

export default function Card({ asset }) {
    return (
        <div className="card">

            <div className="cardHead">

                <p>{asset.asset_title}</p>
                <InfoRounded htmlColor='white' className='info' fontSize='medium'></InfoRounded>

            </div>

            <div className="cardDesc">

                <p>Description: {asset.asset_description}</p>

            </div>

            <div className="cardContent">

                {
                    asset.asset_title === 'Technical Project Management'? 
                    <iframe src={asset.asset_content} frameborder="0" style={{width: '100%', height: '250px'}}></iframe> :
                    asset.asset_title === 'Threadbuild'?
                    <Thread></Thread> :
                    asset.asset_title === 'Structure you pointers ' ? 
                    <PointerComponent></PointerComponent> :
                    <MethodComponent></MethodComponent>
                }

            </div>

        </div>
    )
}