import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';

function App() {
  const data =[
    {
      id:'e1',
      title:'Bike Petrol',
      date:new Date(2023,2,1),
      price:500.00
    },{
      id:'e2',
      title:'Rent',
      date:new Date(2023,3,15),
      price:1500.00
    },{
      id:'e3',
      title:'Food',
      date:new Date(2023,0,5),
      price:5500.00
    }
  ];


  return (
    <div>
      {data.map((e)=>(<ExpenseItem title={e.title} price={e.price} date ={e.date} />))}

    </div>
  );
}

export default App;
