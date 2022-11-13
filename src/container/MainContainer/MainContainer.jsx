import Main from "../../components/Main/Main"
import "./MainContainer.scss"

const MainContainer = ({weathers}) => {
  return (
    <div>
        <Main weathers={weathers}/>
    </div>
  )
}

export default MainContainer