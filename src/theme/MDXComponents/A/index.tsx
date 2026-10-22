import React, {type ReactNode} from 'react';
import OriginalMDXA from '@theme-original/MDXComponents/A';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type {Props} from '@theme/MDXComponents/A';

function isExternalWebsite(href: string | undefined): boolean {
  try {
    const url = new URL(href ?? '', 'https://www.m365wizard.com');
    return (
      (url.protocol === 'https:' || url.protocol === 'http:') &&
      url.hostname !== 'm365wizard.com' &&
      url.hostname !== 'www.m365wizard.com'
    );
  } catch {
    return false;
  }
}

export default function MDXA({children, ...props}: Props): ReactNode {
  return (
    <OriginalMDXA {...props}>
      {children}
      {isExternalWebsite(props.href) && (
        <span className="markdown-external-link-icon" aria-hidden="true">
          <IconExternalLink width="0.75em" height="0.75em" />
        </span>
      )}
    </OriginalMDXA>
  );
}
