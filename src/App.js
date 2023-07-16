import HorizontalScroll from "react-scroll-horizontal";
import Component from "./Component";
import Component2 from "./Component2"
import Component3 from "./Component3"
import Component4 from "./Component4"

const App = () => {
  return <div style={{height: '100vh', width: '100vw'}}>
    <HorizontalScroll reverseScroll={true}>
      <Component2 />
      <Component/>
      <Component3/>
      <Component4/>
    </HorizontalScroll>
    </div>
}


export default App;


