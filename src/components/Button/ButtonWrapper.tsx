import React, { ButtonHTMLAttributes } from 'react'

interface IButtonWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const ButtonWrapper: React.FunctionComponent<IButtonWrapperProps> = ({ children, className,...props }) => {
  return (
    <button {...props} className={`${className} w-full p-1 rounded-md flex items-center justify-center gap-1`}>
      {children}
    </button>
  )
}