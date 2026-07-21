import React, {useState, type ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {ThemeClassNames} from '@docusaurus/theme-common';
import type {Props} from '@theme/DocCard/Heading/Icon';

import styles from './styles.module.css';

function CustomCardIcon({
  path,
  fallback,
}: {
  path: string;
  fallback: ReactNode;
}): ReactNode {
  const src = useBaseUrl(path);
  const [failedPath, setFailedPath] = useState<string>();

  if (failedPath === path) {
    return fallback;
  }

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={styles.cardTitleImage}
      onError={() => setFailedPath(path)}
    />
  );
}

export default function DocCardHeadingIcon({item, icon}: Props): ReactNode {
  const cardIcon = item.customProps?.cardIcon;
  const hasCustomIcon =
    typeof cardIcon === 'string' && cardIcon.trim().length > 0;

  return (
    <span
      className={clsx(ThemeClassNames.docs.docCard.icon, styles.cardTitleIcon)}>
      {hasCustomIcon ? (
        <CustomCardIcon path={cardIcon} fallback={icon} />
      ) : (
        icon
      )}
    </span>
  );
}
