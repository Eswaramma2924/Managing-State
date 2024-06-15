import {useState} from "react";
function ListGroup(){
  const items=['Flipkart','Meesho','Myntra','Ajio','Zepto'];
  const [selectedIndex,setSelectedIndex]=useState(0);
  
    return ( 
        <div>
    <h1>List</h1>
    
    
    {items.length===0? 'No items' :null}
    
    <ul className="list-group">
      {items.map((item,index) => (<li className={selectedIndex===index ?"list-group-item active":"list-group-item"} key={item} onClick={()=>setSelectedIndex(index)}>{item}</li>))}
    
  </ul>
  </div>
)};
export default ListGroup;