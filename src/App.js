import { useEffect, useState } from "react";
import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const [items, setitems] = useState([]);
  const [more, setmore] = useState(9)

  const moreItem = ()=> {
    setmore(more + 9)
  }
  const url = "https://jsonplaceholder.typicode.com/photos";
  const getItems = async () => {
    const response = await fetch(url);
    const items = await response.json();
    setitems(items);
    console.log(items);
  };
  useEffect(() => {
    getItems();
  }, []);

  return (<>
    <div className="cardContainer">
      {items.slice(0, more).map((item) => {
        return <Person item={item} {...item} key={item.id}/>;
      })}

    </div>
    <div className="text-center"><button  onClick={moreItem}>See More</button></div>
    </>
  );
};

const Person = (props) => {
  const { thumbnailUrl, title } = props;
  return (
    <>
      <div className="card">
        <img src={thumbnailUrl} alt={title} />
        <p>{title}</p>
      </div>
    </>
  );
};

export default App;
