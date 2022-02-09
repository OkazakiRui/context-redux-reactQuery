import React, { VFC } from 'react'
import { ReduxToolKitA } from './ReduxToolKitA'
import { ReduxToolKitB } from './ReduxToolKitB'
import { ReduxToolKitC } from './ReduxToolKitC'
import { ReduxToolKitD } from './ReduxToolKitD'

export const MainReduxToolKit: VFC = () => {
  return (
    <div className="grid grid-cols-2 gap-40">
      <ReduxToolKitA />
      <ReduxToolKitB />
      <ReduxToolKitC />
      <ReduxToolKitD />
    </div>
  )
}
