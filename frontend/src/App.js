import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {

  const [content, setContent] = useState("")
  const [users, setUsers] = useState([])

  useEffect(() => {
    getContent()
  }, [])

  useEffect(() => {
    getUsers()
  }, [])

  const getContent = async () => {
    const respose = await axios.get('http://localhost:5000/')
    setContent(respose)
  }

  const getUsers = async () => {
    const respose = await axios.get('http://localhost:5000/users')
    setUsers(respose.data)
  }

  const listUsers = users.map(item => {
    return(
      <tbody key={item.id}>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      </tbody>
    )
  })
  return (
    <div>
      <h1>Content from API</h1>
      <p>{content.data}</p>
      <table>
        {listUsers}
      </table>
      {console.log(users)}
    </div>
  )
}

export default App