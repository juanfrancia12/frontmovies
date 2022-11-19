export const TOKEN_NAME = import.meta.env.VITE_TOKEN_NAME;
export const token = localStorage.getItem(TOKEN_NAME);

export const URL_API_PUBLIC = import.meta.env.VITE_REACT_APP_API_PUBLIC;
export const URL_API_COMICS = import.meta.env.VITE_REACT_APP_API_COMICS;
export const URL_API_SERIES = import.meta.env.VITE_REACT_APP_API_SERIES;
export const URL_API_STORIES = import.meta.env.VITE_REACT_APP_API_STORIES;
export const URL_API_EVENTS = import.meta.env.VITE_REACT_APP_API_EVENTS;

export const KEY_PLUBLIC = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;
export const HASH = import.meta.env.VITE_REACT_APP_HASH_KEY;

export const ORDER_BY = import.meta.env.VITE_REACT_APP_ORDER_BY;

export const LAST_LIMIT = import.meta.env.VITE_REACT_APP_LAST_LIMIT;
export const LAST_LIMIT_CAROUSEL = import.meta.env
  .VITE_REACT_APP_LAST_LIMIT_CAROUSEL;

export const IMAGE_NOT_AVAILABLE = "image_not_available";
