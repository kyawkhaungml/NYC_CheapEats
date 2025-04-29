// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [showBoroughs, setShowBoroughs] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showCuisine, setShowCuisine] = useState(false);
  
  const restaurants = [
    {
      id: 1,
      name: 'Burmese Bites',
      image: '/restaurant1.jpg',
      price: '$10-$15 per person',
      rating: 4.5,
      menu: 'https://example.com/menu1',
      address: '123 Main St, Queens, NY'
    },
    {
      id: 2,
      name: 'Taco Spot',
      image: '/restaurant2.jpg',
      price: '$10-$15 per person',
      rating: 4.2,
      menu: 'https://example.com/menu2',
      address: '456 Park Ave, Brooklyn, NY'
    },
    {
      id: 3,
      name: 'Pasta Place',
      image: '/restaurant3.jpg',
      price: '$15-$20 per person',
      rating: 4.7,
      menu: 'https://example.com/menu3',
      address: '789 Broadway, Manhattan, NY'
    },
    {
      id: 4,
      name: 'Dumpling House',
      image: '/restaurant4.jpg',
      price: '$10-$15 per person',
      rating: 4.3,
      menu: 'https://example.com/menu4',
      address: '321 Grand St, Manhattan, NY'
    },
    {
      id: 5,
      name: 'Falafel King',
      image: '/restaurant5.jpg',
      price: '$8-$12 per person',
      rating: 4.4,
      menu: 'https://example.com/menu5',
      address: '555 Queens Blvd, Queens, NY'
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>NYC Cheap Eats</title>
        <meta name="description" content="Find affordable restaurants in NYC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Image src="/statue-liberty.svg" alt="Statue of Liberty" width={20} height={40} />
          </div>
          <h1>NYC Cheap Eats</h1>
          <div className={styles.logoIcon}>
            <Image src="/knife-fork.svg" alt="Utensils" width={30} height={30} />
          </div>
        </div>
        
        <nav className={styles.navigation}>
          <div className={styles.navItem}>Home</div>
          
          <div className={styles.dropdown} 
               onMouseEnter={() => setShowBoroughs(true)}
               onMouseLeave={() => setShowBoroughs(false)}>
            <div className={styles.navItem}>Boroughs▼</div>
            {showBoroughs && (
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownItem}>Manhattan</div>
                <div className={styles.dropdownItem}>Brooklyn</div>
                <div className={styles.dropdownItem}>Queens</div>
                <div className={styles.dropdownItem}>Staten Island</div>
                <div className={styles.dropdownItem}>Bronx</div>
              </div>
            )}
          </div>
          
          <div className={styles.dropdown}
               onMouseEnter={() => setShowPrice(true)}
               onMouseLeave={() => setShowPrice(false)}>
            <div className={styles.navItem}>Price▼</div>
            {showPrice && (
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownItem}>Under $10</div>
                <div className={styles.dropdownItem}>$10-20</div>
                <div className={styles.dropdownItem}>$20-40</div>
              </div>
            )}
          </div>
          
          <div className={styles.dropdown}
               onMouseEnter={() => setShowCuisine(true)}
               onMouseLeave={() => setShowCuisine(false)}>
            <div className={styles.navItem}>Cuisine▼</div>
            {showCuisine && (
              <div className={styles.dropdownContent}>
                <div className={styles.dropdownItem}>South American</div>
                <div className={styles.dropdownItem}>European</div>
                <div className={styles.dropdownItem}>American</div>
                <div className={styles.dropdownItem}>Asian</div>
                <div className={styles.dropdownItem}>Middle Eastern</div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.restaurantGrid}>
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className={styles.restaurantCard}>
              <div className={styles.restaurantImage}>
                <Image 
                  src="/burmese-bites.jpg" 
                  alt={restaurant.name} 
                  width={300} 
                  height={200} 
                  layout="responsive" 
                />
              </div>
              <div className={styles.restaurantInfo}>
                <h2>
                  {restaurant.name}
                  <span className={styles.rating}>★ {restaurant.rating}</span>
                </h2>
                <p><span className={styles.icon}>💲</span> {restaurant.price}</p>
                <p><a href={restaurant.menu} className={styles.menuLink}>Menu Link</a></p>
                <p><span className={styles.icon}>📍</span> {restaurant.address}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}