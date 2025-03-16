import ListGroup from "./components/ListGroup";
import Message from "./message";
import ListGroupWithProps from "./components/ListGroupWithProps";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
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

  const [alertVisible, setAlertVisible] = useState(false);



  return <div>
    <Message />
    <ListGroup />
    <ListGroupWithProps items={items} heading={heading} onSelectItem={handleSelectItem} />
    {alertVisible && <Alert text="Hello, Good Morning" onClose={() => { setAlertVisible(false); }}><i> RaviKiran</i></Alert>}
    <Button color="primary" onClick={() => { console.log('Clicked'); setAlertVisible(true); }}>My Button</Button>
  </div>
}


export default App;