import { useState } from 'react'
import { Row, Divider, Collapse } from 'antd'
import './App.css'
import foodsJson from './foods.json'
import FoodsBox from './components/foodBox/FoodBox'
import AddFoodForm from './components/addFoodForm/AddFoodForm'
import SearchFoodForm from './components/searchFoodForm/searchFoodForm'
import none from './images/none.png'

const { Panel } = Collapse

function App() {
  const [foods, setFoods] = useState(foodsJson)
  const [foundFoods, setFoundFoods] = useState([])

  let arrayToMap
  if (foundFoods.length) arrayToMap = foundFoods
  else arrayToMap = foods

  const handleDeleteButton = (foodName) => {
    const filteredFoods = foods.filter((theFood) => theFood.name !== foodName)
    const filteredFoundFoods = foundFoods.filter(
      (theFood) => theFood.name !== foodName,
    )
    setFoods(filteredFoods)
    setFoundFoods(filteredFoundFoods)
  }

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
        {foods.length ? (
          <>
            {arrayToMap.map((food) => (
              <FoodsBox
                key={food.name + Math.random() * 10}
                food={food}
                handleDeleteButton={handleDeleteButton}
              />
            ))}
          </>
        ) : (
          <div className="rick-roll">
            <h3>Oops! No more content to show</h3>
            <img src={none} alt="no more to show" />
          </div>
        )}
      </Row>
    </div>
  )
}

export default App
