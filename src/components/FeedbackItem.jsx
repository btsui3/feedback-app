import { useState } from 'react'
function FeedbackItem () {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is the local state text')

  const onSetRating = () => {
    setRating(10)
  }
  const onSetText = () => {
    setText('This is another text')
  }
  return (
    <div className='card '>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
      <button onClick={onSetRating}>Set Rating</button>
      <button onClick={onSetText}>Set Text</button>
    </div>
  )
}

export default FeedbackItem
