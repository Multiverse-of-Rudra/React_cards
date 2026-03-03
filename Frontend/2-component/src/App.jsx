import React from "react";
import Card from "./components/card";
const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' img='https://plus.unsplash.com/premium_photo-1768288662582-24c46f53d290?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
      <Card user='Rohit' img='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
    </div>
  );
};

export default App;
