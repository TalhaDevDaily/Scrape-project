export const FAVORITES_UPDATED_EVENT = "af-favorites-updated";

const FAVORITES_STORAGE_KEY = "af-favorite-items";

export const readStoredFavorites = () => {
  try {
    const saved = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!saved) return [];

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const getFavoriteCount = () => readStoredFavorites().length;

export const toggleFavoriteItem = (product) => {
  const current = readStoredFavorites();
  const exists = current.some((item) => item.id === product.id);
  const next = exists
    ? current.filter((item) => item.id !== product.id)
    : [
        ...current,
        {
          id: product.id,
          slug: product.slug || product.id,
          name: product.name,
          description: product.description || "",
          price: Number(product.price),
          delivery: product.delivery || "",
          badge: product.badge || "",
        },
      ];

  try {
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(next));
  } catch {
    // storage is best effort
  }

  window.dispatchEvent(
    new CustomEvent(FAVORITES_UPDATED_EVENT, { detail: { items: next } }),
  );
  return next;
};

export const isFavoriteItem = (productId) =>
  readStoredFavorites().some((item) => item.id === productId);
