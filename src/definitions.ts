export interface RTSPSharescreenPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
