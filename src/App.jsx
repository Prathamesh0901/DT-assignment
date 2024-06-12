import { useState, useEffect } from 'react';
import Header from './components/Header'
import Content from './components/Content'
import '@fontsource/poppins'
import '@fontsource/poppins/400.css'
import './App.css'

function App() {
  
  const [data, setData] = useState({
    tasks: [],
    title: ''
  });

  const URL = 'https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json';

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(URL);
          console.log(response)
          const x = await response.json();
          let pseudo = {
            tasks: x.tasks,
            title: x.title
          }
          setData(pseudo);
      }

      try {
          fetchData();
      } catch (err) {
          return;
      }
  }, []);

  // console.log(data);

  return (
    <div className="container">

      <Header></Header>

      <Content title={data.title} content={data.tasks}></Content>

    </div>
  )
}

export default App
