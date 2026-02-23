const API_BASE = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000/api').replace(/\/$/, '');
const BACKEND_BASE = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000').replace(/\/$/, '');

function getAuthHeaders() {
  const token = localStorage.getItem('admin_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiRequest(path, options = {}) {
  const isFormData = options.body instanceof FormData;
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      ...(!isFormData ? { 'Content-Type': 'application/json' } : {}),
      ...getAuthHeaders(),
    },
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    throw new Error(data?.message || 'Request failed');
  }

  return data;
}

export { API_BASE };

export function toMediaUrl(path) {
  if (!path || typeof path !== 'string') return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${BACKEND_BASE}/${path.replace(/^\//, '')}`;
}
