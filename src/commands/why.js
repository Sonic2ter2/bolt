// @flow
import * as options from '../utils/options';
import {PError} from '../utils/errors';

export type WhyOptions = {};

export function toWhyOptions(args: options.Args, flags: options.Flags): WhyOptions {
  return {};
}

export async function why(opts: WhyOptions) {
  throw new PError('Unimplemented command "why"');
}
