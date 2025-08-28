import styles from './style.less';
import { useState, useEffect } from 'react';
import { history, useLocation } from 'umi';
import IndexPage from '../IndexPage'

const Compoents = {
  'INDEX': <IndexPage />,
  'FACTION': <IndexPage />,
  'BASICS': <IndexPage />,
  'RUN': <IndexPage />,
  'ENVIRONMENT': <IndexPage />,
  'COMMUNITY': <IndexPage />,
}

const HomePage = () => {
  const { hash } = useLocation();
  const [currentTab, setCurrentTab] = useState('INDEX')

  useEffect(() => {
    setCurrentTab(hash.startsWith('#') ? hash.substring(1) : 'INDEX');
  }, [hash])

  return (
    <div className={styles.container}>
      {Compoents[currentTab]}
    </div>
  );
};

export default HomePage;
