import './index.css'

const TabItem = props => {
  const {tabsDetail, onChangeCategory, isActive} = props
  const {tabId, displayText} = tabsDetail
  const onClickTabItem = () => {
    onChangeCategory(tabId)
  }
  const newClass = isActive ? 'active' : 'notActive'

  return (
    <li className="li">
      <button className={newClass} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
