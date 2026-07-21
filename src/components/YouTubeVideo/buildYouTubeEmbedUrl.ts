const ISO_639_1_LANGUAGE_PATTERN = /^[A-Za-z]{2}$/;

export type YouTubeEmbedOptions = {
  videoId: string;
  currentLocale: string;
  videoLanguage?: string | null;
  start?: number;
  end?: number;
};

function isValidTime(value: number | undefined): boolean {
  return value === undefined || (Number.isInteger(value) && value > 0);
}

function getPrimaryLanguageCode(locale: string): string {
  return locale.split('-')[0].toLowerCase();
}

export function buildYouTubeEmbedUrl({
  videoId,
  currentLocale,
  videoLanguage,
  start,
  end,
}: YouTubeEmbedOptions): string | undefined {
  if (!isValidTime(start) || !isValidTime(end)) {
    return undefined;
  }

  if (start !== undefined && end !== undefined && end <= start) {
    return undefined;
  }

  if (
    videoLanguage !== null &&
    videoLanguage !== undefined &&
    !ISO_639_1_LANGUAGE_PATTERN.test(videoLanguage)
  ) {
    return undefined;
  }

  const normalizedVideoLanguage = videoLanguage?.toLowerCase();
  const currentLanguage = getPrimaryLanguageCode(currentLocale);
  const parameters = new URLSearchParams({
    autoplay: '1',
    controls: '1',
    hl: currentLocale,
    rel: '0',
  });

  if (
    normalizedVideoLanguage !== undefined &&
    normalizedVideoLanguage !== currentLanguage
  ) {
    parameters.set('cc_load_policy', '1');
    parameters.set('cc_lang_pref', currentLanguage);
  }

  if (start !== undefined) {
    parameters.set('start', String(start));
  }

  if (end !== undefined) {
    parameters.set('end', String(end));
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${parameters.toString()}`;
}
