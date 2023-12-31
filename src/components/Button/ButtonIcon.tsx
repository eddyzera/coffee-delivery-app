import { IconProps } from '@phosphor-icons/react'
import React from 'react'

interface IButtonIconProps extends IconProps  {
  icon: React.ElementType
}

export const ButtonIcon: React.FunctionComponent<IButtonIconProps> = ({ icon: Icon, ...props }) => {
  return (
    <Icon {...props} />
  )
}