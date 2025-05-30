import React from 'react';

import { CogsIcon } from '../icons';
import styles from './styles.module.css';

const OutpuTitle: React.FC = props => {
  return (
    <div className={styles['container']}>
      <CogsIcon />
      <span>{props.children}</span>
    </div>
  );
};

export default OutpuTitle;
