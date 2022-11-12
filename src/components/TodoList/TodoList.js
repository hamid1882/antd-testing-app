import { Button, Card, Space } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';

function TodoList({ todoList, handleTodoList }) {
  const [isShowTodo, setIsShowTodo] = useState(false);


  return (
    <div>
      <h1>Todo App</h1>
      <Button
        type="danger"
        onClick={() => setIsShowTodo(!isShowTodo)}
        style={{ marginBottom: "1em" }}
        aria-label='top-btn'
      >
        {isShowTodo ? "Hide" : "Generate"}
      </Button>
      {
        isShowTodo
          ? <Card>
            <Space style={{ display: "flex", flexDirection: "column" }}>
              <Card data-testid="items-container">
                <Card.Grid style={{ width: "10%" }}>1.</Card.Grid>
                <Card.Grid style={{ width: "75%" }}>Item</Card.Grid>
                <Card.Grid style={{ width: "15%" }}><Button type="primary">Done</Button></Card.Grid>
              </Card>
              <Button type="primary">Add A New Todo</Button>
            </Space>
          </Card>
          :
          <Card data-testid="no-todo-text">
            <h2>Click on Generate to get Todo's</h2>
          </Card>
      }
    </div >
  )
}

export default TodoList
