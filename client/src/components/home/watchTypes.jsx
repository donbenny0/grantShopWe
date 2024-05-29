import React from 'react'
import styles from '../../css/watchTypes.module.css'
const WatchTypes = () => {
    return (
        <div className={`mt-3 ${styles.watchTypesSection}`}>
            <div className={styles.titleText}>
                <h4>Choose watches by</h4>
                <h1>FUNCTIONALITY / STYLE</h1>
            </div>
            <div className={styles.functionalitySection}>
                <div className="row g-4">
                    <div className={`col-12 col-md-4 ${styles.functionalItem}`}>
                        <img src="images/png/analog/analogThumbnail.png" className="img-fluid" alt="Analog Thumbnail 1" />
                        <div className={`d-flex flex-column ${styles.boxDetails}`}>
                            <span>ANALOG</span>
                            <small>For dressy occations</small>
                        </div>
                    </div>
                    <div className={`col-12 col-md-4 ${styles.functionalItem}`}>
                        <img src="images/png/analog/analogThumbnail.png" className="img-fluid" alt="Analog Thumbnail 2" />
                        <div className={`d-flex flex-column ${styles.boxDetails}`}>
                            <span>DIGITAL</span>
                            <small>For sports & workwear</small>
                        </div>
                    </div>
                    <div className={`col-12 col-md-4 ${styles.functionalItem}`}>
                        <img src="images/png/analog/analogThumbnail.png" className="img-fluid" alt="Analog Thumbnail 3" />
                        <div className={`d-flex flex-column ${styles.boxDetails}`}>
                            <span>CHRONOGRAPH</span>
                            <small>For everyday</small>
                        </div>
                    </div>
                    <div className={`col-12 col-md-4 ${styles.functionalItem}`}>
                        <img src="images/png/analog/analogThumbnail.png" className="img-fluid" alt="Analog Thumbnail 3" />
                        <div className={`d-flex flex-column ${styles.boxDetails}`}>
                            <span>SMART WATCHES</span>
                            <small>For everyday</small>
                        </div>
                    </div>

                    <div className={`col-12 col-md-4 ${styles.functionalItem}`}>
                        <img src="images/png/analog/analogThumbnail.png" className="img-fluid" alt="Analog Thumbnail 4" />
                        <div className={`d-flex flex-column ${styles.boxDetails}`}>
                            <span>HYBRID</span>
                            <small>For sports & fitness</small>
                        </div>
                    </div>
                    <div className={`col-12 col-md-4 ${styles.functionalItem}`}>
                        <img src="images/png/analog/analogThumbnail.png" className="img-fluid" alt="Analog Thumbnail 4" />
                        <div className={`d-flex flex-column ${styles.boxDetails}`}>
                            <span>KID'S</span>
                            <small>For sports & fitness</small>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WatchTypes