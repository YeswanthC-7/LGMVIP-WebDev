// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [url, setUrl] = useState()
  const Person = ({ data }) => {

    const [isLoading, setLoading] = useState(false)
    setTimeout(() => {
      setLoading(true)
    }, 1000)
    if (isLoading === false) {
      return (<><div className="loader"></div></>)
    }
    return (<>{
      data.map(post =>
        <div className="profile" key={post.id}>
          <img src={post.avatar} alt={post.first_name} />
          <div>
            {post.first_name}  {post.last_name}
            <br></br>
            {post.email}
            <br></br>
          </div>
          {/* <hr></hr> */}
        </div>
      )
    }</>
    )
  }


  const Users = () => {
    const [info, SetInfo] = useState([])

    useEffect(() => {

      axios.get(url).then(res => res.data.data).then(res => {
        console.log(res)
        SetInfo(res)
        // setLoading(false)
      }).catch(err => console.log(err))



    }, [url])


    // console.log(res)
    if (url) {

      return (
        <>

          <Person data={info} />
        </>
      )
    }
    return (<><h1>Click on Get Users</h1> </>)
  }



  const Header = () => {
    return (<div className="Header">
      <div className="logo-app">
        <h3>LetsGrowMore</h3>
      </div>
      <div className="button">
        <button onClick={() => setUrl("https://reqres.in/api/users?page=1")} >Get Users</button>
      </div>
    </div>
    )
  }

  console.log(url)

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        {/* <Users /> */}
        <Users />
      </header>
    </div>
  );
}

export default App;
