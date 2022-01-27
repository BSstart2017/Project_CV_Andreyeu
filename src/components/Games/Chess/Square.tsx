import { FC, ReactNode } from 'react'

export const Square: FC<PropsType> = ({ orange, children }) => {
    const backgroundColor = orange ? 'orange' : 'white'
    const color = orange ? 'white' : 'orange'
    return (
        <div style={{color, backgroundColor ,minHeight: '100px', minWidth: '100px', textAlign: 'center'}}>
            {children}
        </div>
    )
}

export type PropsType = {
    orange: boolean
    children: ReactNode
}
