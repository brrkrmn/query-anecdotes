import { useNotificationValue, useNotificationDispatch } from "../NotificationContext"

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  const notification = useNotificationValue()
  const dispatch = useNotificationDispatch()
  
  setTimeout(() => {
    dispatch({type: "HIDE"})
  }, 5000)

  if (notification === '') {
    return null
  } else {
    return <div style={style}>{notification}</div>
  }
}

export default Notification
