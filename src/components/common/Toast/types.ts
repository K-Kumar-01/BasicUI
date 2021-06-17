interface ToastItem {
  id: number | string;
  title: string;
  message: string;
  type?: "basic" | "primary" | "secondary" | "success" | "warning" | "danger";
  toastClassName?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}
export { ToastItem };
