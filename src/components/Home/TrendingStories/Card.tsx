import styles from './trending_stories.module.css'
import clsx from 'clsx' 

const Card = () => {
  return (
    <div className={clsx([styles.gradient, styles.trendingStoriesCard])} />
  )
}

export default Card