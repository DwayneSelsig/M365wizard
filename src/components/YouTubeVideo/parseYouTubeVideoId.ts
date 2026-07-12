const YOUTUBE_VIDEO_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

export type YouTubeVideoInput = {
  id?: string;
  url?: string;
};

export function isValidYouTubeVideoId(value: string): boolean {
  return YOUTUBE_VIDEO_ID_PATTERN.test(value);
}

function firstValidPathSegment(pathname: string): string | undefined {
  return pathname
    .split('/')
    .map((segment) => segment.trim())
    .filter(Boolean)
    .find(isValidYouTubeVideoId);
}

function normalizeYouTubeHostname(hostname: string): string {
  return hostname.toLowerCase().replace(/^www\./, '');
}

function extractFromYouTubeUrl(value: string): string | undefined {
  let parsedUrl: URL;

  try {
    parsedUrl = new URL(value);
  } catch {
    return undefined;
  }

  const hostname = normalizeYouTubeHostname(parsedUrl.hostname);

  if (hostname === 'youtu.be') {
    return firstValidPathSegment(parsedUrl.pathname);
  }

  if (hostname !== 'youtube.com') {
    return undefined;
  }

  if (parsedUrl.pathname === '/watch') {
    const videoId = parsedUrl.searchParams.get('v')?.trim();
    return videoId && isValidYouTubeVideoId(videoId) ? videoId : undefined;
  }

  const [, videoType, videoId] = parsedUrl.pathname.split('/');

  if (videoType !== 'embed' && videoType !== 'shorts') {
    return undefined;
  }

  const trimmedVideoId = videoId?.trim();
  return trimmedVideoId && isValidYouTubeVideoId(trimmedVideoId)
    ? trimmedVideoId
    : undefined;
}

export function extractYouTubeVideoId(value?: string): string | undefined {
  const trimmedValue = value?.trim();

  if (!trimmedValue) {
    return undefined;
  }

  if (isValidYouTubeVideoId(trimmedValue)) {
    return trimmedValue;
  }

  return extractFromYouTubeUrl(trimmedValue);
}

export function resolveYouTubeVideoId({
  id,
  url,
}: YouTubeVideoInput): string | undefined {
  return id?.trim() ? extractYouTubeVideoId(id) : extractYouTubeVideoId(url);
}
