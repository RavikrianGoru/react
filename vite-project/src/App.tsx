import ListGroup from "./components/ListGroup";
import Message from "./message";
import ListGroupWithProps from "./components/ListGroupWithProps";
function App() {
  let items = [
    'Hyd',
    'Bgrl',
    'Chn',
    'Gnt',
    'Vjy'
  ];
  let heading = 'Citis';

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return <div>
    <Message />
    <ListGroup />
    <ListGroupWithProps items={items} heading={heading} onSelectItem={handleSelectItem} />
  </div>
}


export default App;