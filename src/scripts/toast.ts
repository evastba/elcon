/** Blendet kurz eine Hinweismeldung am unteren Bildrand ein. */
export function showToast(msg: string): void {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout((window as any).__toastTimer);
  (window as any).__toastTimer = setTimeout(() => t.classList.remove('show'), 3600);
}
