function toast(message, options = {}) {
  const type = options.type || 'info';
  const duration = typeof options.duration === 'number' ? options.duration : (type === 'loading' ? 999999 : 2200);
  const icons = {
    loading: `<span class="toast-loading-ani"></span>`,
    error: `<span class="toast-icon">❌</span>`,
    info: `<span class="toast-icon">ℹ️</span>`,
    warning: `<span class="toast-icon">⚠️</span>`
  };
  const toastEl = document.createElement('div');
  toastEl.className = `toast toast-${type}`;
  toastEl.innerHTML = `${icons[type] || ''}<span>${message}</span>`;
  document.getElementById('toast-container').appendChild(toastEl);

  // loading类型需手动关闭
  if (type !== 'loading') {
    setTimeout(() => {
      toastEl.style.opacity = 0;
      setTimeout(() => toastEl.remove(), 300);
    }, duration);
  }

  // 返回关闭函数
  return () => {
    toastEl.style.opacity = 0;
    setTimeout(() => toastEl.remove(), 300);
  };
}