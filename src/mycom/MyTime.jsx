import './my.css'

function MyTime() {
  return (
    <div className='myh2'>현재시간 : {new Date().toLocaleTimeString()}</div>
  )
}

export default MyTime;
