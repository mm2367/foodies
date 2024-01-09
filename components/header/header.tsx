import Link from "next/link";
import logoImg from '../../public/images/logo.png'
import styles from "./header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./navlink";
export default function MainHeader(){

    return(
        <>
            <MainHeaderBackground/>
            <header className={styles.header}>
            <Link className={styles.logo} href={'/'}>
                <Image alt={'logo image'} src={logoImg} priority={true}/>
                Next Level Food
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href={'/meals'}>
                            Browse Meals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href={'/community'}>
                            Foodies Community
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
            </>
    )
}