import { useState } from "react";
function ListGroup() {

    let items = [
        'Hyd',
        'Bgrl',
        'Chn',
        'Gnt',
        'Vjy'
    ];
    const [selectedIndex, setSelectedIndex] = useState(-1);


    const getMessage = () => {
        //return items.length === 0 ? <p> No item Found</p> : null;
        return items.length === 0 && <p> No item Found</p>;
    }

    //Event Hnadler
    const hadleClick = (event: MouseEvent) => {
        console.log(event)
    }

    return (
        <>
            <h1>List</h1>
            {
                getMessage()
            }
            <ul className="list-group">
                {
                    items.map((item, index) => <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        //onClick={hadleClick}
                        onClick={() => { setSelectedIndex(index); }}
                    >{item}</li>)
                }
            </ul>
        </>
    );

}

export default ListGroup
