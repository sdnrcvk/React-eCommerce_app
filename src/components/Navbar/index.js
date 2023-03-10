import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.css"
import { Button } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'
import { useBasket } from '../../contexts/BasketContext'

function Navbar() {
    const {user}=useAuth();
    const {items}=useBasket();

  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
            <div className={styles.logo}>
                <Link to={"/"}>eCommerce</Link>
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link to={"/"}>Products</Link>   
                </li>
            </ul>
        </div>
        <div className={styles.right}>
        {items.length > 0 && (
            <Link to={"/basket"}>
                <Button colorScheme='pink' variant="outline">
                    Basket ({items.length})
                </Button>
            </Link>      
            )}
            {!user && (
            <>
                <Link to={"/signin"}>
                    <Button colorScheme='pink'>Giriş Yap</Button>
                </Link>
                <Link to={"/signup"}>
                    <Button colorScheme='pink'>Kayıt Ol</Button>
                </Link>
            </>
            )}
            {user && (
                <>
                    <Link to={"/profile"}>
                        <Button colorScheme='pink'>Profil</Button>
                    </Link>                
                </>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar