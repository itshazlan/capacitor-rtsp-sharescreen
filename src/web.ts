import { WebPlugin } from '@capacitor/core';

import type { RTSPSharescreenPlugin } from './definitions';

export class RTSPSharescreenWeb
  extends WebPlugin
  implements RTSPSharescreenPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
