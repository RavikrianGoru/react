import { useState } from "react";
//{items:[], heading:string}
interface ListGroupProps {
    heading: string;
    items: string[];
    onSelectItem: (item: string) => void;
}



function ListGroupWithProps({ items, heading, onSelectItem }: ListGroupProps) {


    const [selectedIndex, setSelectedIndex] = useState(-1);


    const getMessage = () => {
        //return items.length === 0 ? <p> No item Found</p> : null;
        return items.length === 0 && <p> No item Found</p>;
    }

    //Event Hnadler
    /*
    const hadleClick = (event: MouseEvent) => {
        console.log(event)
    }
        */

    return (
        <>
            <h1>{heading}</h1>
            {
                getMessage()
            }
            <ul className="list-group">
                {
                    items.map((item, index) => <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        //onClick={hadleClick}
                        onClick={() => { setSelectedIndex(index); onSelectItem(item); }}
                    >{item}</li>)
                }
            </ul>
        </>
    );

}

export default ListGroupWithProps
