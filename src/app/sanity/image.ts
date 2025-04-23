import imageUrlBuilder from '@sanity/image-url';
import type { ImageSource } from '@sanity/image-url/lib/types/types';

import { client } from './client';

const builder = imageUrlBuilder(client);

export function urlFor(source: ImageSource) {
  return builder.image(source);
}
