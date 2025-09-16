import netRunner from '@/assets/netRunner.webp'
import styles from './style.less';

const Spin = () => <div className={styles.loadingOverlay}>
  <div className={styles.loadingSpinner}>
    <img src={netRunner} alt="Loading" className={styles.loadingImage} />
  </div>
</div>

export default Spin