export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  createdAt: string;
}

export const BLOGS_STORAGE_KEY = "5bros-admin-blogs";

export function loadBlogs(): BlogPost[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedValue = window.localStorage.getItem(BLOGS_STORAGE_KEY);
    return storedValue ? (JSON.parse(storedValue) as BlogPost[]) : [];
  } catch {
    return [];
  }
}

export function saveBlogs(blogs: BlogPost[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(BLOGS_STORAGE_KEY, JSON.stringify(blogs));
}

export function getBlogBySlug(slug: string) {
  return loadBlogs().find((blog) => blog.slug === slug) ?? null;
}
