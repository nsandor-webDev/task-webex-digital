import React from 'react'
import { useLocation, RouteComponentProps, Link  } from 'react-router-dom';

type StateType = {
    id: number,
    imgSrc: string,
    name: string,
    address: string,
    desc: string,
    timestamp: Date
}

type IndexProps = RouteComponentProps<{}, {}, StateType>;
interface Props {

}

const UsersPage: React.FC<IndexProps> = ({ location, history }) => {
    return (
        <div>
            <img src={location.state.imgSrc} alt="" />
            <h1>{location.state.name}</h1>
            <p>Bytom: {location.state.address}</p>
            <p className="desc"><b>Popis používateľa:</b> <br/> {location.state.desc}</p>
            <p><small>Vytvorené: 
                <i> {location.state.timestamp.getDate() + '.' + (location.state.timestamp.getMonth() + 1) + '.' + location.state.timestamp.getFullYear() + ' / ' + location.state.timestamp.getHours() + ':' + location.state.timestamp.getMinutes() + ':' + location.state.timestamp.getSeconds()}</i>
            </small></p>
            <Link to={ {pathname: "/"}}> Naspäť</Link>
        </div>
    )
}

export default UsersPage
