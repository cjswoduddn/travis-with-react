import axios from 'axios';



function App() {
  const handleClick = () =>{

    const TEMPLATE_BASE_URL = 'http://localhost:8080/login';

    axios({
      method: 'post',
      withCredentials: true,
      url: TEMPLATE_BASE_URL,
    })
    .then((res)=>{
      alert(res.data);
    })
    .catch((err)=>{
      alert("Error")
    });
  }
  return (
    <>
      <button onClick={handleClick}>button</button>
    </>
  );
}

export default App;
