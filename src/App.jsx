import { useState, useEffect } from 'react'
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
  const [mode, setmode] = useState("Create")
  const [page, showpage] = useState("React")

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
    if (name == "" && regno == "" && Age == "") {
      alert("Fill all fields")
    } else {
      const newStudentData = {
        name,
        regno,
        Age
      }

      if (mode === "Create") {
        setstudent(prevStudents => [...prevStudents, newStudentData]);

      } else {
        const studentUpdate = student.findIndex((student) => student.regno === regno)

        if (studentUpdate > -1) {
          const tempstudent = [...student]
          tempstudent.splice(studentUpdate, 1, newStudentData)
          setstudent(tempstudent)
        }
        setmode("Create")
      }


      setName('');
      setRegno('');
      setAge('');
    }

  }

  const recordDeletBtn = (regno) => {
    const studentIndex = student.findIndex((student) => {
      return student.regno === regno
    })
    if (studentIndex > -1) {
      const tempStudent = [...student]
      tempStudent.splice(studentIndex, 1)
      setstudent(tempStudent)
    }
  }

  const recordUpdateBtn = (regno) => {
    const studentIndex = student.findIndex((student) => {
      return student.regno === regno
    })


    if (studentIndex > -1) {
      const tempStudent = [...student]
      setName(tempStudent[studentIndex].name);
      setRegno(tempStudent[studentIndex].regno);
      setAge(tempStudent[studentIndex].Age);
      tempStudent[studentIndex].name
    }
    setmode("Update")
  }

  const renderpage = (e) => {
    showpage(e.target.innerText);
  }

  const [user, userdata] = useState(1)
  const [uname ,setuname] = useState()
  const [username ,setusername] = useState()
  const [id ,setid] = useState()
  const [email ,setemail] = useState()
  const [phone ,setphone] = useState()
  const [website ,setwebsite] = useState()
  const [city ,setcity] = useState()


  const changedata = (e) => {
    userdata(e.target.innerText)
  }


 useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
      .then(response => response.json())
      .then((json) =>{
        setid(json.id)
        setusername(json.username)
        setuname(json.name) 
        setemail(json.email)
        setphone(json.phone)
        setwebsite(json.website)
        setcity(json.address.city)
      })
  }, [user])


  return (
    <>
      <div className='flex gap-3'>
        <button className='p-2 bg-blue-500 text-white rounded' onClick={renderpage}>React</button>
        <button className='p-2 bg-blue-500 text-white rounded' onClick={renderpage}>Image</button>
        <button className='p-2 bg-blue-500 text-white rounded' onClick={renderpage}>Student</button>
        <button className='p-2 bg-blue-500 text-white rounded' onClick={renderpage}>User</button>
      </div>
      {page === "React" &&
        <>
          <div className='flex mt-6 items-center'>

            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="w-32" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="react w-32" alt="React logo" />
            </a>
          </div>
          <h1 className='text-3xl mt-4'>Vite + React</h1>
        </>
      }
      {
        page === "Image" &&
        <div className='mt-4 flex flex-col justify-center items-center'>
          {showImage &&
            <img src={image || defaultImage} alt="Random image" />}

          <div className="flex flex-col justify-center items-center'">
            <button className='bg-blue-500 rounded text-white p-2' onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <div>
            <input type="text" placeholder='Enter URL' className='border-2 text-lg mr-2' onChange={renderimage} />
            <button onClick={showimages} className='bg-blue-500 rounded text-white p-1'>Show</button>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      }

      {
        page === "Student" &&
        <>
          <div>
            <input className='text-lg border-2 m-2' type="text" value={regno} placeholder='Reg #' onChange={addreg} />
            <input className='text-lg border-2 m-2' type="text" value={name} placeholder='Name' onChange={addname} />
            <input className='text-lg border-2 m-2' type="text" value={Age} placeholder='Age' onChange={addage} />
            {/* <button className='bg-blue-500 mx-2 p-1 text-white' >Update Data</button> */}
            <button className='bg-blue-500 mx-2 p-1 text-white' onClick={addStudentData}>{mode}</button>
          </div>
          <table>
            <thead >
              <tr>
                <th className='px-4 border-2'>S/NO</th>
                <th className='px-4 border-2'>REG #</th>
                <th className='px-4 border-2'>NAME</th>
                <th className='px-4 border-2'>AGE</th>
                <th className='px-4 border-2'>UPDATE</th>
                <th className='px-4 border-2'>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {student.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className='px-4 border-2 text-center'>{index + 1}</td>
                    <td className='px-4 border-2 text-center'>{data.regno}</td>
                    <td className='px-4 border-2 text-center'>{data.name}</td>
                    <td className='px-4 border-2 text-center'>{data.Age}</td>
                    <td className='px-4 border-2 text-center' onClick={() => {
                      recordUpdateBtn(data.regno)
                    }}><button >✏️</button></td>
                    <td className='px-4 border-2 text-center'><button onClick={() => {
                      recordDeletBtn(data.regno)
                    }}>❌</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      }
      {
        page === "User" &&
        <>
          <div className='flex gap-2 mt-4'>
            <button className='bg-gray-500 text-white p-2 rounded px-6 text-lg' onClick={changedata}>1</button>
            <button className='bg-gray-500 text-white p-2 rounded px-6 text-lg' onClick={changedata}>2</button>
            <button className='bg-gray-500 text-white p-2 rounded px-6 text-lg' onClick={changedata}>3</button>
            <button className='bg-gray-500 text-white p-2 rounded px-6 text-lg' onClick={changedata}>4</button>
            <button className='bg-gray-500 text-white p-2 rounded px-6 text-lg' onClick={changedata}>5</button>
            <button className='bg-gray-500 text-white p-2 rounded px-6 text-lg' onClick={changedata}>6</button>
            <button className='bg-gray-500 text-white p-2 rounded px-6 text-lg' onClick={changedata}>7</button>
            <button className='bg-gray-500 text-white p-2 rounded px-6 text-lg' onClick={changedata}>8</button>
            <button className='bg-gray-500 text-white p-2 rounded px-6 text-lg' onClick={changedata}>9</button>
            <button className='bg-gray-500 text-white p-2 rounded px-6 text-lg' onClick={changedata}>10</button>
          </div>
          <table className='mt-4'>
            <thead>
              <tr>
                <th className='px-3 border-2 text-center'>ID</th>
                <th className='px-3 border-2 text-center'>USERNAME</th>
                <th className='px-3 border-2 text-center'>Name</th>
                <th className='px-3 border-2 text-center'>EMAIL</th>
                <th className='px-3 border-2 text-center'>PHONE</th>
                <th className='px-3 border-2 text-center'>WEBSITE</th>
                <th className='px-3 border-2 text-center'>CITY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-3 border-2 text-center'>{id}</td>
                <td className='px-3 border-2 text-center'>{username}</td>
                <td className='px-3 border-2 text-center'>{uname}</td>
                <td className='px-3 border-2 text-center'>{email}</td>
                <td className='px-3 border-2 text-center'>{phone}</td>
                <td className='px-3 border-2 text-center'>{website}</td>
                <td className='px-3 border-2 text-center'>{city}</td>
              </tr>
            </tbody>

          </table>
        </>
      }


    </>
  )
}

export default App
