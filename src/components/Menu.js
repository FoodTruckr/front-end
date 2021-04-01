import { Panel } from 'react95'

const Menu = (props) => {

    return (
        <Panel>
            <h3>Menu Items:</h3>
            <p>{props.menu.itemName}</p>
            <p>{props.menu.itemDescription}</p>
            <p>{props.menu.itemPrice}</p>
            <img src={props.menu.itemPhotoUrl} alt=""/>
        </Panel>
    )

}

export default Menu