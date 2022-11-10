import { ExecuteSatement } from '../index';
test('My Greeter', () => {
  expect(ExecuteSatement('(true && false) && (true || true)')).toBe('false');
});