import { useState } from 'react'
import { Form, Col, Row, Input } from 'antd'

function SearchFoodForm({ foods, setFoundFoods }) {
  const [query, setQuery] = useState('')

  const handleQueryInput = (e) => {
    const foundFoods = foods.filter((food) =>
      food.name.match(new RegExp(`${e.target.value}`, 'i')),
    )

    setQuery(e.target.value)

    setFoundFoods(foundFoods)
  }

  return (
    <Row>
      <Col span={6} offset={9}>
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input value={query} onChange={handleQueryInput} />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default SearchFoodForm
