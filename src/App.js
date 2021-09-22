import { useState } from 'react'
import { Row, Divider, Collapse } from 'antd'
import './App.css'
import foodsJson from './foods.json'
import FoodsBox from './components/foodBox/FoodBox'
import AddFoodForm from './components/addFoodForm/AddFoodForm'
import SearchFoodForm from './components/searchFoodForm/searchFoodForm'

const { Panel } = Collapse

function App() {
  const [foods, setFoods] = useState(foodsJson)
  const [foundFoods, setFoundFoods] = useState([])

  return (
    <div className="App">
      <Divider>
        <h2>Add food entry</h2>
      </Divider>
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header={'Hide/Show'} key="1">
          <AddFoodForm setFood={setFoods} foods={foods} />
        </Panel>
      </Collapse>

      <Divider>
        <h2>Search</h2>
      </Divider>
      <SearchFoodForm foods={foods} setFoundFoods={setFoundFoods} />

      <Divider>
        <h2>Food List</h2>
      </Divider>
      <Row>
        {foundFoods.length
          ? foundFoods.map((food) => (
              <FoodsBox
                key={food.name}
                food={food}
                setFoods={setFoods}
                foods={foods}
                setFoundFoods={setFoundFoods}
                foundFoods={foundFoods}
              />
            ))
          : foods.map((food) => (
              <FoodsBox
                key={food.name}
                food={food}
                setFoods={setFoods}
                foods={foods}
                setFoundFoods={setFoundFoods}
                foundFoods={foundFoods}
              />
            ))}
      </Row>
    </div>
  )
}

export default App
