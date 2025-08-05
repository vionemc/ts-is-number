/*!
 * is-number <https://github.com/vionemc/ts-is-number>
 *
 * Copyright (c) 2025-present, Aminah Nuraini.
 * Released under the MIT License.
 */

export default function(num: unknown) : boolean {
  if (typeof num === 'number') {
    return num - num === 0;
  }
  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
};
