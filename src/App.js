import { useState } from 'react'
import { Row, Divider } from 'antd'
import './App.css'
import foodsJson from './foods.json'
import FoodsBox from './components/foodBox/FoodBox'
import AddFoodForm from './components/addFoodForm/AddFoodForm'
import SearchFoodForm from './components/searchFoodForm/searchFoodForm'

function App() {
  const [foods, setFoods] = useState(foodsJson)
  const [foundFoods, setFoundFoods] = useState([])

  return (
    <div className="App">
      <h1>Add food entry</h1>
      <AddFoodForm setFood={setFoods} foods={foods} />
      <Divider></Divider>
      <h1>Search</h1>
      <SearchFoodForm foods={foods} setFoundFoods={setFoundFoods} />
      <Divider></Divider>
      <h1>Food List</h1>
      <Row>
        {foundFoods.length
          ? foundFoods.map((food) => (
              <FoodsBox
                key={food.name}
                food={food}
                setFoods={setFoods}
                foods={foods}
              />
            ))
          : foods.map((food) => (
              <FoodsBox
                key={food.name}
                food={food}
                setFoods={setFoods}
                foods={foods}
              />
            ))}
      </Row>
    </div>
  )
}

export default App
