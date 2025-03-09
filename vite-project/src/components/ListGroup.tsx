
function ListGroup() {

    let items = [
        'Hyd',
        'Bgrl',
        'Chn',
        'Gnt',
        'Vjy'
    ];
    items = [];

    const getMessage = () => {
        //return items.length === 0 ? <p> No item Found</p> : null;
        return items.length === 0 && <p> No item Found</p>;
    }

    return (
        <>
            <h1>List</h1>
            {
                getMessage()
            }
            <ul className="list-group">
                {
                    items.map((item) => <li key={item}>{item}</li>)
                }
            </ul>
        </>
    );

}

export default ListGroup
