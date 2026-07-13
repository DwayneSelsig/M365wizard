import type {ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
import {resolveYouTubeVideoId} from './parseYouTubeVideoId';

type YouTubeVideoProps = {
  id?: string;
  url?: string;
  title?: string;
};

export default function YouTubeVideo({
  id,
  url,
  title = translate({
    id: 'youtubeVideo.defaultTitle',
    message: 'Embedded YouTube video',
  }),
}: YouTubeVideoProps): ReactNode {
  const videoId = resolveYouTubeVideoId({id, url});

  if (!videoId) {
    return (
      <p className={styles.error} role="alert">
        <Translate id="youtubeVideo.invalidVideo" description="Shown when a YouTube video ID or URL is invalid">
          Unable to load YouTube video: provide a valid 11-character YouTube video ID or supported YouTube URL.
        </Translate>
      </p>
    );
  }

  return (
    <div className={styles.video}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
