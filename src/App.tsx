import React from 'react'
import Button from './components/Button'

export const App: React.FunctionComponent = () => {
  return (
    <div>
      <h1>app</h1>
      <Button.Wrapper className='bg-slate-600'>
        <Button.Label text='hello' className='text-white' />
      </Button.Wrapper>
    </div>
  )
}