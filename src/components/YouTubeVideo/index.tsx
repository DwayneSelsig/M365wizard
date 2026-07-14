import {useState, type ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';
import {resolveYouTubeVideoId} from './parseYouTubeVideoId';
import YouTubeLogo from './youtubelogo.svg';

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
  const [isLoaded, setIsLoaded] = useState(false);

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
      {isLoaded ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className={styles.placeholder}>
          <div className={styles.content}>
            <YouTubeLogo className={styles.logo} aria-hidden="true" />
            <div>
              <h2 className={styles.heading}>
                <Translate id="youtubeVideo.privacyHeading" description="Heading in the privacy placeholder shown before loading a YouTube video">
                  This video is provided by YouTube.
                </Translate>
              </h2>
              <p className={styles.description}>
                <Translate id="youtubeVideo.privacyDescription" description="Privacy notice shown before loading a YouTube video">
                  You can load the video here or open it directly on YouTube. In either case, your browser connects to YouTube and YouTube may process data such as your IP address and information about your device and browser.
                </Translate>
              </p>
            </div>
            <div className={styles.actions}>
              <button className={styles.action} type="button" onClick={() => setIsLoaded(true)}>
                <span className={styles.playIcon} aria-hidden="true" />
                <Translate id="youtubeVideo.load" description="Button label that loads a YouTube video in the page">
                  Load video
                </Translate>
              </button>
              <a
                className={styles.action}
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer">
                <span className={styles.externalIcon} aria-hidden="true">
                  ↗
                </span>
                <Translate id="youtubeVideo.openOnYouTube" description="Button label that opens a YouTube video in a new tab">
                  Open on YouTube
                </Translate>
              </a>
            </div>
          </div>
          <div className={styles.visual} aria-hidden="true">
            <span className={styles.videoMark} />
          </div>
        </div>
      )}
    </div>
  );
}
