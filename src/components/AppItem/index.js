import './index.css'

const AppItem = props => {
  const {appsDetails} = props
  const {appId, appName, imageUrl, category} = appsDetails
  return (
    <li className="item-con">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
