import React from 'react'
import { useLocation, RouteComponentProps, Link  } from 'react-router-dom';

type StateType = {
    id: number,
    imgSrc: string,
    name: string,
    address: string,
    desc: string
}

type IndexProps = RouteComponentProps<{}, {}, StateType>;
interface Props {

}

const UsersPage: React.FC<IndexProps> = ({ location, history }) => {
    return (
        <div>
            <img src={location.state.imgSrc} alt="" />
            <h1>{location.state.name}</h1>
            <p>{location.state.address}</p>
            <p className="desc">{location.state.desc}</p>
            <Link to={ {pathname: "/"}}> Naspäť</Link>
        </div>
    )
}

export default UsersPage
