import './assets/css/list.css';
import Item from './partials/_Item';

// This page have an add button and table with list of items
const List = (props) => {
  return (
    <div>
      <button>Add Item</button>

      {props.items.map((item) => {
        <Item key={item.id} item={item} />;
      })}
    </div>
  );
};

export default List;
