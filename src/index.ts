import { registerPlugin } from '@capacitor/core';

import type { RTSPSharescreenPlugin } from './definitions';

const RTSPSharescreen = registerPlugin<RTSPSharescreenPlugin>(
  'RTSPSharescreen',
  {
    web: () => import('./web').then(m => new m.RTSPSharescreenWeb()),
  },
);

export * from './definitions';
export { RTSPSharescreen };
