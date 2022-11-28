import styles from './styles.module.sass'
export interface NavItemProp {
  href: string
  label: string
  active?: boolean
}

const NavItem = ({ href, label, active }: NavItemProp) => {
  return (
    <li
      className={
        active
          ? `${styles.nav_item} ${styles.nav_item_active}`
          : styles.nav_item
      }
    >
      <a href={`/${href}`}>{label}</a>
    </li>
  )
}
export default NavItem
