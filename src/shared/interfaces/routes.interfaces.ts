import type {PATH} from '../consts';

export type TPath = (typeof PATH)[keyof typeof PATH];
