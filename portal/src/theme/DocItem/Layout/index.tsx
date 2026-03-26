import type {ReactNode} from 'react';
import clsx from 'clsx';
import DocItemLayout from '@theme-original/DocItem/Layout';

import styles from './styles.module.css';

export default function DocItemLayoutWrapper(props: {children: ReactNode}): ReactNode {
  return (
    <div className={styles.docShell}>
      <div className={styles.bodyFrame}>
        <div className={clsx(styles.articleSurface, 'eatgf-doc-surface')}>
          <DocItemLayout {...props} />
        </div>
      </div>
    </div>
  );
}
