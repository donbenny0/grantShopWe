import React from 'react'
import styles from '../css/customNav.module.css'
import { Link } from 'react-router-dom'
const CustomNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className={styles.brand}>Grant<span className={styles.kart}>ShopWe</span></span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <form className={`d-flex ${styles.searchForm}`}>
              <input className="form-control me-2" type="search" placeholder="Search for your favourite watches." aria-label="Search" />
            </form>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={'logiLink'} className="nav-link" href="#">
                <span class="flaticon-user"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'cart'} className="nav-link" href="#">
                <span class="flaticon-shopping-cart"></span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to={'wishlist'} className="nav-link" href="#">
                  <i className="fas fa-heart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default CustomNav