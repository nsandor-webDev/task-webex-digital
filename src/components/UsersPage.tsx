import React from 'react'
import { useLocation, RouteComponentProps  } from 'react-router-dom';

type StateType = {
    id: number,
    imgSrc: string,
    name: string,
    address: string
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
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos laudantium natus amet hic perferendis enim inventore incidunt blanditiis, optio magnam aliquid laborum impedit officiis vero a in quaerat recusandae?</p>

        </div>
    )
}

export default UsersPage
