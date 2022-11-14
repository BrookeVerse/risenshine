import Main from "../../components/Main/Main"
import "./MainContainer.scss"

const MainContainer = ({weathers, user, colRef, db, randomAffirmations, longitude, latitude}) => {
  return (
    <div>
        <Main weathers={weathers} user={user} colRef={colRef}  db={db} randomAffirmations={randomAffirmations} longitude={longitude} latitude={latitude}/>
    </div>
  )
}

export default MainContainer