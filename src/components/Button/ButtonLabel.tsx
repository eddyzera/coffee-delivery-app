import React, { LabelHTMLAttributes } from 'react'

interface IButtonLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string
}

export const ButtonLabel: React.FunctionComponent<IButtonLabelProps> = ({
  text,
  className,
  ...props
}) => {
  return (
    <label {...props} className={`${className} font-roboto text-sm font-normal cursor-pointer`}>
      {text}
    </label>
  )
}