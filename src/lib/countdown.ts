export function getTargetTime(): number {
  if (typeof window === 'undefined') return Date.now() + 60 * 60 * 1000;
  const stored = localStorage.getItem('anyimmi_countdown_target');
  if (stored) {
    const target = parseInt(stored, 10);
    if (target > Date.now()) return target;
  }
  const target = Date.now() + 60 * 60 * 1000;
  localStorage.setItem('anyimmi_countdown_target', target.toString());
  return target;
}
