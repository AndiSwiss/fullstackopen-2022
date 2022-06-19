const Notification = ({message, isError = false}) => {
  if (message === null) return null

  return (<div className={`${isError ? 'error' : 'success'} message`}>
    {message}
  </div>)
}

export default Notification
