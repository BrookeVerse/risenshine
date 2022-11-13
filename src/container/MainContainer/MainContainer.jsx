import Main from "../../components/Main/Main"
import "./MainContainer.scss"

const MainContainer = ({weathers, user}) => {
  return (
    <div>
        <Main weathers={weathers} user={user}/>
    </div>
  )
}

export default MainContainer