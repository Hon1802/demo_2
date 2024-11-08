// Masonry.tsx
import React, { useState, useEffect, useMemo } from 'react'
import useMeasure from 'react-use-measure'
import { useTransition, a } from '@react-spring/web'
import shuffle from 'lodash.shuffle'
import useMedia from './useMedia' // Đảm bảo đường dẫn đúng
import data from './data' // Đảm bảo đường dẫn đúng
import styles from './styles.module.css'

const Masonry: React.FC = () => {
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)

  // Hook2: Measure the width of the container element
  const [ref, { width }] = useMeasure()

  // Hook3: Hold items
  const [items, setItems] = useState(data)

  // Hook4: shuffle data every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => setItems(shuffle), 2000)
    return () => clearInterval(interval)
  }, [])

  // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const [heights, gridItems] = useMemo(() => {
    const heights = new Array(columns).fill(0) // Each column gets a height starting with zero
    const gridItems = items.map((child) => {
      const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing
      const x = (width / columns) * column // x = container width / number of columns * column index
      const y = (heights[column] += child.height / 2) - child.height / 2 // y = height of the current column
      return { ...child, x, y, width: width / columns, height: child.height / 2 }
    })
    return [heights, gridItems]
  }, [columns, items, width])

  // Hook6: Turn the static grid values into animated transitions
  const transitions = useTransition(gridItems, {
    key: (item: { css: string; height: number }) => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25
  })

  // Render the grid
  return (
    <div ref={ref} className={styles.list} style={{ height: Math.max(...heights) }}>
      {transitions((style, item) => (
        <a.div style={style}>
          <div style={{ backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)` }} />
        </a.div>
      ))}
    </div>
  )
}

export default Masonry
