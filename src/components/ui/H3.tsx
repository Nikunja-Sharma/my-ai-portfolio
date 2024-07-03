import { cn } from '@/lib/utils'
import React from 'react'

const H3 = (props:React.HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1 {...props} className={cn("text-xl font-bold tracking-tight ", props.className)
    }
    />
  )
}

export default H3