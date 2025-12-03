import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.tabukharaj.shop'
const currentDate = new Date()

// Function to generate Arabic category URLs
const generateArabicUrls = () => {
  const arabicCategories = [
    { en: 'furniture', ar: 'الأثاث' },
    { en: 'electronics', ar: 'الإلكترونيات' },
    { en: 'sell', ar: 'بيع' },
    { en: 'buy', ar: 'شراء' },
    { en: 'about', ar: 'من-نحن' },
    { en: 'contact', ar: 'اتصل-بنا' },
  ]
  
  return arabicCategories.map(category => ({
    url: `${baseUrl}/ar/${category.ar}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))
}

// Furniture subcategories
const furnitureCategories = [
  'sofa',
  'bed',
  'wardrobe',
  'table',
  'chair',
  'office-furniture',
  'kitchen-furniture',
  'outdoor-furniture',
  'kids-furniture',
  'antique-furniture'
]

// Electronics subcategories
const electronicsCategories = [
  'mobile-phones',
  'laptops',
  'tv',
  'refrigerator',
  'washing-machine',
  'air-conditioner',
  'camera',
  'audio-systems',
  'gaming-consoles',
  'kitchen-appliances'
]

// Cities in Tabuk region for localized pages
const tabukCities = [
  'tabuk-city',
  'al-wajh',
  'duba',
  'haql',
  'umluj',
  'tayma',
  'al-badah'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // Home pages (English & Arabic)
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ar`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    
    // Main category pages - English
    {
      url: `${baseUrl}/furniture`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/electronics`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    
    // Action pages - English
    {
      url: `${baseUrl}/sell`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/buy`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sell-furniture`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sell-electronics`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/buy-furniture`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/buy-electronics`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    
    // Information pages - English
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    
    // Legal pages - English
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/return-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    
    // Blog/News pages - English
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tips`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/trending`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  // Generate furniture subcategory pages
  const furniturePages = furnitureCategories.map(category => ({
    url: `${baseUrl}/furniture/${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Generate electronics subcategory pages
  const electronicsPages = electronicsCategories.map(category => ({
    url: `${baseUrl}/electronics/${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Generate city-based pages
  const cityPages = tabukCities.map(city => ({
    url: `${baseUrl}/city/${city}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Arabic pages
  const arabicPages = generateArabicUrls()

  // Combined all pages
  return [
    ...staticPages,
    ...furniturePages,
    ...electronicsPages,
    ...cityPages,
    ...arabicPages,
  ]
}

// Optional: Dynamic sitemap if you have database products
/*
export async function generateSitemap() {
  // Fetch products from your database
  // const products = await prisma.product.findMany({
  //   where: { published: true },
  //   select: { id: true, updatedAt: true, slug: true }
  // })
  
  // const productPages = products.map(product => ({
  //   url: `${baseUrl}/product/${product.slug || product.id}`,
  //   lastModified: product.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.8,
  // }))
  
  // return [...staticPages, ...productPages]
}
*/