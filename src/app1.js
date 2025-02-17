// import react from "react"
// function app(){
//     // let x = react.createElement("div" ,{classNmae:"App"}) ,
//     //   React.createElement

//     let username = "sasank";
//     return (
//         // <div classname="app">
//         //     <h1>Welcome to react</h1>
//         //         <ing />
//         // </div>
//         // x
//         <div>
//             <h1>Excler</h1>
//             <p>para</p>
//             {username}
//             {100*100}
        
//         </div>

//     );
// }
// export default app;

// class App extends from "react";
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>class Component</h1>
//       </div>
//     )
//   }
// }

// export default App;

// function App(){
//   return(
//     <div>
//       <h1>Functional Component</h1>
//     </div>
//   )
// }
// export default App;

// const App=()=>{
//   return(
//     <h1>Arrow functional Component</h1>
//   )
// }
// export default App;


// import React from "react";
// class app extends React.Component{
//   render(){
//     <h1>Class Component</h1>
//   }
// };
// export default app;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="app">
//         <Navbar />
//         <Main />
//         <div className="side">
//           <Sidebar1 />
//           <Sidebar2 />
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react'
// import CBCPropEx1 from './propexample/CBCPropEx1'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//         <CBCPropEx1
//         username="X"
//         age={19}
//         hobbies={["Playing", "Eating", "Sleeping"]}
//         address={{city:"Hyd", area:"Miyapur"}}
//         isMarried={false}
//         sendFun={function(){alert("Hi X")}}
//         />
//         </div>
//     )
//   }
// }

// import React from "react";
// import FBCPropEx1 from "./propexample/FBCPropEx1";

// const App = () => {
//   return (
//     <div>
//       <FBCPropEx1 profiles={["insta", "snap", "facebook"]} />
//     </div> 
//   );
// };

// export default App;

// ! props.children
// import React from 'react'
// import Propschildren from './propexample/PropsChildrenex';
// import SubChildProps from './propexample/SubChildProps';

// const App = () => {
//   return (
//     <div>
//         <Propschildren username="x" company="google">
//             <h1>This data is passing as a props children to child Component</h1>
//             <SubChildProps/>
//         </Propschildren>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import UseEffectEx from './hookexample/UseEffectEx'

// const App = () => {
//   return (
//     <div className="App" >
//       <h1>React useEffect Example</h1>
//       <UseEffectEx/>
//     </div>
//   )
// }
// export default App;

// import React from 'react'
// import RefExample from "./hookexample/RefExample";
// const App = () => {
//   return (
//     <div>
//       <h1>React useRef Example</h1>
//       <RefExample/>
//     </div>
//   )
// }
// export default App