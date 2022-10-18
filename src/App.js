import React , {useState}  from 'react'

import NavBar from './components/NavBar'
import News from './components/News'


import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";



const App =()=> {

  const [progress, setProgress] = useState(0)


  let pageSize = 15;
 let  country = "in"

 

  //  const setProgress = (progress) => {

  //   setProgress({

  //     progress: progress

  //   })
  // }

 


    return (

      <Router>
        <div>

          <NavBar />

          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          {/* The above bar is from loading bar website...first install it package then import it then use it... */}

          {/* <News setProgress={this.setProgress}  key={"sports"}  pageSize={this.pageSize} country ={"us"} category = {"sports"} />   */}

          <Routes>

            {/* <Route path="/business" element={<News setProgress={this.setProgress}   pageSize={this.pageSize} country ={"us"} category = {"business"} />} </Route> */}

            {/* <Route path="/home"  element={<News setProgress={this.setProgress}  key={"general"}  pageSize={this.pageSize} country ={"us"} category = {"general"} />} /> */}



            <Route exact path="/" element={<News setProgress={setProgress} key={"sports"} pageSize={pageSize} country={country} category={"sports"} />} />

            <Route exact path="/sports" element={<News setProgress={setProgress} key={"sports"} pageSize={pageSize} country={country} category={"sports"} />} />

            <Route exact path="/business" element={<News setProgress={setProgress} key={"business"} pageSize={pageSize} country={country} category="business" />} />

            <Route exact path="/entertainment" element={<News setProgress={setProgress} key={"entertainment"} pageSize={pageSize} country={country} category="entertainment" />} />

            <Route exact path="/general" element={<News setProgress={setProgress} key={"general"} pageSize={pageSize} country={country} category="general" />} />

            <Route exact path="/health" element={<News setProgress={setProgress} key={"health"} pageSize={pageSize} country={country} category="health" />} />

            <Route exact path="/science" element={<News setProgress={setProgress} key={"science"} pageSize={pageSize} country={country} category="science" />} />

            <Route exact path="/technology" element={<News setProgress={setProgress} key={"technology"} pageSize={pageSize} country={country} category="technology" />} /> {/* we have pass the key as a props so it will rerender into it own components */}
          </Routes>
        </div>
      </Router>

    )
  
}

export default App;