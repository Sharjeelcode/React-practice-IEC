import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const defaultImage = "https://www.shutterstock.com/image-photo/karachi-pakistan-february-10-2021-260nw-1929054245.jpg"

function App() {
  const [count, setCount] = useState(0)
  const [image, setimage] = useState()
  const [showImage, showimagebtn] = useState(false)

  const showimages = () => {
    showimagebtn(true)
  }

  const renderimage = (e) => {
    if (showImage) {
      showimagebtn(false)
    }
    setimage(e.target.value)
  }


  const existingstudentsdata = [
    {
      name: "Ajaz",
      regno: 302,
      Age: 28
    },
    {
      name: "Maaz",
      regno: 201,
      Age: 44
    },
    {
      name: "Sharjeel",
      regno: 102,
      Age: 24
    }
  ]
  const [name, setName] = useState()
  const [regno, setRegno] = useState()
  const [Age, setAge] = useState()
  const [student, setstudent] = useState(existingstudentsdata)

  const addname = (e) => {
    setName(e.target.value)
  }
  const addreg = (e) => {
    setRegno(e.target.value)
  }

  const addage = (e) => {
    setAge(e.target.value)

  }

  const addStudentData = () => {
    const newStudentData = {
      name,
      regno,
      Age
    }

    setstudent(prevStudents => [...prevStudents, newStudentData]);


  }

  return (
    <>
    <h1 className='bg-red-700'>Hello</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {showImage &&
        <img src={image || defaultImage} alt="Random image" />}

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <input type="text" onChange={renderimage} />
        <button onClick={showimages}>Show</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <input type="text" placeholder='Name' onChange={addname} />
        <input type="text" placeholder='Reg #' onChange={addreg} />
        <input type="text" placeholder='Age' onChange={addage} />
        <button onClick={addStudentData}>Add Data</button>
      </div>
      <table className='bg-white'>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Reg #</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {student.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.regno}</td>
                <td>{data.Age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </>
  )
}

export default App
