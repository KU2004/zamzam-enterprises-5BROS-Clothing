import { type FormEvent, useEffect, useMemo, useState } from "react";
import { Nav } from "../components/Nav";
import { type BlogPost, loadBlogs, saveBlogs } from "../lib/blogs";

const AUTH_KEY = "5bros-admin-auth";
const DEFAULT_CREDENTIALS = {
  username: "admin",
  password: "admin123",
};

function buildSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [feedback, setFeedback] = useState("Use the admin credentials to manage your blog.");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lockoutSeconds, setLockoutSeconds] = useState(0);

  useEffect(() => {
    const storedAuth = typeof window !== "undefined" ? window.localStorage.getItem(AUTH_KEY) : null;
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }

    setBlogs(loadBlogs());
  }, []);

  const previewText = useMemo(() => {
    if (!content.trim()) {
      return "Your blog preview will appear here as soon as you add content.";
    }

    return content.trim().slice(0, 220);
  }, [content]);

  const fullPreviewText = useMemo(() => {
    if (!content.trim()) {
      return "Write your article in the editor to see the full preview here.";
    }

    return content.trim();
  }, [content]);

  useEffect(() => {
    if (lockoutSeconds <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setLockoutSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [lockoutSeconds]);

  useEffect(() => {
    if (lockoutSeconds === 0 && loginAttempts >= 3) {
      setLoginAttempts(0);
      setFeedback("You can try logging in again.");
    }
  }, [lockoutSeconds, loginAttempts]);

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (lockoutSeconds > 0) {
      return;
    }

    if (username.trim() === DEFAULT_CREDENTIALS.username && password === DEFAULT_CREDENTIALS.password) {
      window.localStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
      setFeedback("Welcome back. You can add or edit your blog posts now.");
      setLoginAttempts(0);
      setLockoutSeconds(0);
      return;
    }

    const nextAttempts = loginAttempts + 1;

    if (nextAttempts >= 3) {
      setLoginAttempts(3);
      setLockoutSeconds(30);
      setFeedback("Too many failed attempts. Please wait 30 seconds.");
      return;
    }

    setLoginAttempts(nextAttempts);
    setFeedback(`Invalid credentials. ${3 - nextAttempts} attempts remaining.`);
  }

  function handleLogout() {
    window.localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
    setFeedback("You have been logged out. Sign in again when you are ready.");
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      setFeedback("Please add a title and blog content before publishing.");
      return;
    }

    const newBlog: BlogPost = {
      id: `${Date.now()}`,
      title: title.trim(),
      slug: slug.trim() || buildSlug(title),
      excerpt: excerpt.trim() || content.trim().slice(0, 140),
      content: content.trim(),
      createdAt: new Date().toISOString(),
    };

    const updatedBlogs = [newBlog, ...blogs];
    setBlogs(updatedBlogs);
    saveBlogs(updatedBlogs);
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setFeedback(`Saved “${newBlog.title}” successfully.`);
  }

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen bg-white px-4 py-20 text-slate-900">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-2xl md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Admin access</p>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">Publish blog posts with ease</h1>
            <p className="mt-5 text-lg text-slate-950">
              Sign in to manage your blog, add a new article, and write fresh content for your audience.
            </p>
          </div>

          <form className="w-full max-w-md rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-lg" onSubmit={handleLogin}>
            <h2 className="font-display text-2xl">Login</h2>
            <p className="mt-2 text-sm text-slate-950">Access the dashboard to add and write blog content.</p>

            <label className="mt-5 block text-sm font-medium text-slate-700" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-slate-950 outline-none ring-0"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter username"
            />

            <label className="mt-4 block text-sm font-medium text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-slate-950 outline-none ring-0"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
            />

            <button
              type="submit"
              disabled={lockoutSeconds > 0}
              className={`mt-6 w-full rounded-full bg-gold px-4 py-3 font-semibold text-slate-950 transition ${lockoutSeconds > 0 ? "cursor-not-allowed opacity-50" : "hover:opacity-90"}`}
            >
              Sign in
            </button>

            <p className="mt-4 text-sm text-slate-950">
              {lockoutSeconds > 0 ? `Too many failed attempts. Try again in ${lockoutSeconds} second${lockoutSeconds === 1 ? "" : "s"}.` : feedback}
            </p>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[linear-gradient(135deg,#f8f5ef_0%,#fefefe_100%)] px-4 py-22 text-slate-900">
      <Nav />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gold">Blog admin</p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl">Manage your blog posts</h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-600">
              Add a new blog article, write the full content, and save it instantly for your website.
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-gold hover:text-gold"
          >
            Log out
          </button>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm" onSubmit={handleSubmit}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-2xl">Add / write blog</h2>
                <p className="mt-2 text-sm text-slate-600">Create a new article and publish it from here.</p>
              </div>
              <span className="rounded-full bg-gold/10 px-3 py-1 text-sm font-semibold text-gold">New post</span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700" htmlFor="title">Title</label>
                <input
                  id="title"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-gold"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="e.g. Summer Collection Trends"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700" htmlFor="slug">Slug</label>
                <input
                  id="slug"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-gold"
                  value={slug}
                  onChange={(event) => setSlug(event.target.value)}
                  placeholder="summer-collection-trends"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-slate-700" htmlFor="excerpt">Short excerpt</label>
              <textarea
                id="excerpt"
                className="mt-2 min-h-24 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-gold"
                value={excerpt}
                onChange={(event) => setExcerpt(event.target.value)}
                placeholder="What is this blog about?"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-slate-700" htmlFor="content">Blog content</label>
              <textarea
                id="content"
                className="mt-2 min-h-64 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-gold"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Write your article here..."
              />
            </div>

            <button type="submit" className="mt-6 rounded-full bg-gold px-6 py-3 font-semibold text-slate-950 transition hover:opacity-90">
              Save blog
            </button>

            <p className="mt-4 text-sm text-slate-600">{feedback}</p>
          </form>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="font-display text-2xl">Preview</h3>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-gold">Draft preview</p>
                <h4 className="mt-3 font-display text-2xl text-slate-900">{title || "Untitled blog"}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">{excerpt || previewText}</p>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-slate-900">
                <h4 className="font-display text-xl">Full article preview</h4>
                <div className="mt-4 space-y-4 text-sm leading-8 text-slate-700">
                  {fullPreviewText.split(/\n{2,}/).filter(Boolean).map((paragraph, index) => (
                    <p key={`${paragraph.slice(0, 12)}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl">Recent posts</h3>
                <span className="text-sm text-slate-500">{blogs.length} saved</span>
              </div>

              <div className="mt-5 space-y-3">
                {blogs.length === 0 ? (
                  <p className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-500">
                    No blog posts yet. Create your first article to see it here.
                  </p>
                ) : (
                  blogs.slice(0, 5).map((blog) => (
                    <div key={blog.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <h4 className="font-semibold text-slate-900">{blog.title}</h4>
                      <p className="mt-2 text-sm text-slate-600">{blog.excerpt}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-400">/{blog.slug}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
