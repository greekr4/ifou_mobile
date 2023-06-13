import { useState } from "react";
import {Nav} from 'react-bootstrap';

function TabContent(props){
    if(props.ClickTab === 0){
      return <div>Tab 1</div>
    }else if(props.ClickTab === 1) {
      return <div>Tab 2</div>
    }else if(props.ClickTab === 2){
      return <div>Tab 3</div>
    }
  }

  
function Contents(props) {
let [ClickTab, SetClickTab] = useState(0);

const Clicktest = () => {
  SetClickTab(0);
  console.log('dd');
}

return(
    <>
    <Nav className="mt-5 mb-3" variant="tabs" defaultActiveKey="link-0">
    <Nav.Item>
      <Nav.Link eventKey="link-0" onClick={Clicktest}>Tab 1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" onClick={()=>{SetClickTab(1)}}>Tab 2</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" onClick={()=>{SetClickTab(2)}}>Tab 3</Nav.Link>
    </Nav.Item>
  </Nav>
   
  <TabContent ClickTab={ClickTab}/>
   </>
);
  
}

export default Contents;