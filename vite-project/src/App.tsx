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

  return <div>
    <Message />
    <ListGroup />
    <ListGroupWithProps items={items} heading={heading} />
  </div>
}


export default App;