function toast(message, options = {}) {
  const type = options.type || "info";
  const duration =
    typeof options.duration === "number"
      ? options.duration
      : type === "loading"
      ? 999999
      : 2000;
  const icons = {
    loading: `<span class="toast-loading-ani"></span>`,
    error: `<span class="toast-icon" style="color:#ff4d4f;"><i class='iconfont icon-error'></i></span>`,
    info: `<span class="toast-icon" style="color:#1890ff;"><i class='iconfont icon-info'></i></span>`,
    warning: `<span class="toast-icon" style="color:#faad14;"><i class='iconfont icon-warning-filling'></i></span>`,
  };
  // 容器复用，避免多次插入
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    // 直接插入到body下
    document.body.appendChild(container);
  }
  // 创建toast
  const toastEl = document.createElement("div");
  toastEl.className = `toast toast-${type}`;
  toastEl.innerHTML = `${
    icons[type] || ""
  }<span class="toast-msg">${message}</span>`;
  // toast本身fixed，插入body下的容器
  container.appendChild(toastEl);

  // 轻微淡入
  requestAnimationFrame(() => {
    toastEl.style.opacity = 1;
    toastEl.style.transform = "translateX(-50%) translateY(0)";
  });

  // loading类型需手动关闭
  if (type !== "loading") {
    setTimeout(() => {
      toastEl.style.opacity = 0;
      toastEl.style.transform = "translateY(-16px) ";
      setTimeout(() => toastEl.remove(), 260);
    }, duration);
  }

  // 返回关闭函数
  return () => {
    toastEl.style.opacity = 0;
    toastEl.style.transform = "translateY(-16px) translateX(-50%)";
    setTimeout(() => toastEl.remove(), 260);
  };
}
