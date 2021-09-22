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
            {foundFoods.length
              ? foundFoods.map((food) => (
                  <FoodsBox
                    key={food.name + Math.random() * 10}
                    food={food}
                    setFoods={setFoods}
                    foods={foods}
                    setFoundFoods={setFoundFoods}
                    foundFoods={foundFoods}
                  />
                ))
              : foods.map((food) => (
                  <FoodsBox
                    key={food.name + Math.random() * 10}
                    food={food}
                    setFoods={setFoods}
                    foods={foods}
                    setFoundFoods={setFoundFoods}
                    foundFoods={foundFoods}
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
