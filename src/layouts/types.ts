export type LayoutName = 'foo' | 'bar';

export interface LocationState {
  fromLayout: LayoutName;
  toLayout: LayoutName;
}