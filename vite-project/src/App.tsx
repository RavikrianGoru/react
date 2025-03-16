import ListGroup from "./components/ListGroup";
import Message from "./message";
import ListGroupWithProps from "./components/ListGroupWithProps";
import Alert from "./components/Alert";
import Button from "./components/Button";
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
    <Alert text="Hello, Good Morning"><i> RaviKiran</i></Alert>
    <Button color="primary" onClick={() => { console.log('Clicked') }}>My Button</Button>
  </div>
}


export default App;