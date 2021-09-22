import React, { useState } from 'react'
import { Form, Input, Button, Row, Col } from 'antd'

function AddFoodForm({ setFood, foods }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState('')
  const [servings, setServings] = useState('')

  const handleNameInput = (e) => setName(e.target.value)
  const handleImageInput = (e) => setImage(e.target.value)
  const handleCaloriesInput = (e) => setCalories(e.target.value)
  const handleServingsInput = (e) => setServings(e.target.value)

  const handleSubmitButton = (e) => {
    e.preventDefault()
    const newFood = { name, image, calories, servings }
    console.log(newFood)
    setFood([...foods, newFood])
  }

  return (
    <Row>
      <Col span={6} offset={9}>
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input value={name} onChange={handleNameInput} />
          </Form.Item>

          <Form.Item label="Image">
            <Input value={image} onChange={handleImageInput} />
          </Form.Item>

          <Form.Item label="Calories">
            <Input value={calories} onChange={handleCaloriesInput} />
          </Form.Item>

          <Form.Item label="Servings">
            <Input value={servings} onChange={handleServingsInput} />
          </Form.Item>

          <Form.Item>
            <Button onClick={handleSubmitButton}>Add Food</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default AddFoodForm
