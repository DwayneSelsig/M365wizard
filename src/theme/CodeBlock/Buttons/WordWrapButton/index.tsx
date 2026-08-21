import React, {type ReactNode, useEffect, useRef} from 'react';
import {useCodeBlockContext} from '@docusaurus/theme-common/internal';
import OriginalWordWrapButton from '@theme-original/CodeBlock/Buttons/WordWrapButton';
import type {Props} from '@theme/CodeBlock/Buttons/WordWrapButton';

export default function WordWrapButton(props: Props): ReactNode {
  const {metadata, wordWrap} = useCodeBlockContext();
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) {
      return;
    }

    initialized.current = true;
    if (metadata.language === 'text' && !wordWrap.isEnabled) {
      wordWrap.toggle();
    }
  }, [metadata.language, wordWrap]);

  return <OriginalWordWrapButton {...props} />;
}
