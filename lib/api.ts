const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

type FetchOptions = {
  next?: { revalidate?: number };
};

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data?: T;
} | T;

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Request failed ${res.status}: ${body || res.statusText}`);
  }
  const json = await res.json() as ApiResponse<T>;
  // Handle wrapped response format from backend: { success, data }
  if (json && typeof json === 'object' && 'success' in json && 'data' in json) {
    return json.data as T;
  }
  return json as T;
}

function buildQuery(params?: Record<string, unknown>) {
  if (!params) return '';
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    qs.set(key, String(value));
  });
  const query = qs.toString();
  return query ? `?${query}` : '';
}

export type HomepageData = {
  hero?: {
    title?: string;
    subtitle?: string;
    backgroundImage?: string;
    ctaButtons?: { text: string; link: string; type?: string }[];
  };
  visionMissionPhilosophy?: {
    vision?: { title?: string; content?: string };
    mission?: { title?: string; content?: string };
    philosophy?: { title?: string; content?: string };
  };
  whoWeAre?: { title?: string; content?: string };
  whyChoose?: {
    title?: string;
    content?: string;
    image?: string;
    features?: string[];
  };
  accreditation?: {
    title?: string;
    content?: string;
    image?: string;
    stats?: { label: string; value: string }[];
  };
  featuredNews?: NewsItem[];
};

export type AboutData = {
  intro?: { label?: string; title?: string; content?: string };
  features?: { number: string; title: string; content: string }[];
  quote?: { text?: string; author?: string; backgroundImage?: string };
  variety?: {
    label?: string;
    title?: string;
    content?: string;
    images?: string[];
    cta?: { text: string; link: string };
  };
  howItWorks?: {
    label?: string;
    title?: string;
    image?: string;
    steps?: { icon?: string; title: string; description: string }[];
  };
  categories?: {
    features?: { icon?: string; title: string; description: string }[];
    images?: string[];
  };
  subscribe?: { title?: string; description?: string };
};

export type NewsItem = {
  _id: string;
  title: string;
  slug: string;
  featuredImage?: string;
  teaser?: string;
  publishDate?: string;
  category?: string;
  status?: string;
  featured?: boolean;
  views?: number;
  content?: string;
  metaTitle?: string;
  metaDescription?: string;
};

export type ContactData = {
  mainCampus?: {
    address: string;
    phone?: string;
    email?: string;
    mapUrl?: string;
  };
  additionalOffices?: {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
  }[];
  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
  formSettings?: {
    enabled?: boolean;
    recipientEmail?: string;
    autoReplyEnabled?: boolean;
    autoReplyMessage?: string;
  };
  businessHours?: { weekdays?: string; weekends?: string };
};

export async function getHomepageData(options?: FetchOptions): Promise<HomepageData> {
  const res = await fetch(`${API_BASE}/homepage`, { next: { revalidate: options?.next?.revalidate ?? 60 } });
  return handleResponse<HomepageData>(res);
}

export async function getAboutData(options?: FetchOptions): Promise<AboutData> {
  const res = await fetch(`${API_BASE}/about`, { next: { revalidate: options?.next?.revalidate ?? 60 } });
  return handleResponse<AboutData>(res);
}

export async function getNewsList(
  params?: { page?: number; limit?: number; category?: string },
  options?: FetchOptions
): Promise<{ news: NewsItem[]; totalPages?: number; currentPage?: number; total?: number }> {
  const query = buildQuery(params);
  const res = await fetch(`${API_BASE}/news${query}`, { next: { revalidate: options?.next?.revalidate ?? 30 } });
  return handleResponse(res);
}

export async function getNewsDetail(slug: string, options?: FetchOptions): Promise<NewsItem> {
  const res = await fetch(`${API_BASE}/news/${slug}`, {
    next: { revalidate: options?.next?.revalidate ?? 30 },
  });
  return handleResponse(res);
}

export async function getContactData(options?: FetchOptions): Promise<ContactData> {
  const res = await fetch(`${API_BASE}/contact`, { next: { revalidate: options?.next?.revalidate ?? 300 } });
  return handleResponse(res);
}
