import { cn } from '@/lib/utils'
import React from 'react'

const H2 = (props:React.HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1 {...props} className={cn("text-2xl font-semibold tracking-tight ", props.className)
    }
    />
  )
}

export default H2