'use client'

import { useDispatch, useSelector } from 'react-redux'
import { IMain } from '../types/main'
import { useMain } from '../hooks/useMain'
const TestPage = () => {
  const dispatch = useDispatch()
  const count = useSelector((state: IMain) => state.main.count)
  const {data, isLoading} = useMain()

  const hanldeClick = (type: string) => {
    dispatch({ type: `main/${type}` })
  }

  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center '>
      <div>count : {count}</div>
      <div>
        <button onClick={() => hanldeClick('plus')}>+</button>
        <button onClick={() => hanldeClick('minus')} className='ml-4'>-</button>
      </div>
      {(!isLoading && data) && (
        <div className='mt-4'>
          <div>id: {data.id}</div>
          <div>title: {data.title}</div>
        </div>
      )}
    </div>
  )
}

export default TestPage