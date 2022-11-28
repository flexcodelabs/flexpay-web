import { navItems } from '../../data'
import NavItem from './NavItem'
import styles from './styles.module.sass'


const Nav = () => {
  return (
    <nav className={styles.nav_items}>
      {navItems.map((navItem) => (
        <NavItem href={navItem.href} label={navItem.label} />
      ))}
    </nav>
  )
}
export default Nav
