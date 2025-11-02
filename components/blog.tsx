"use client"

import Link from "next/link"

interface BlogProps {
  language: "en" | "ar"
}

const translations = {
  en: {
    title: "Latest Blog Posts",
    posts: [
      {
        id: "buy-used-electronics-safely",
        title: "How to Buy Used electronics and furnitures Safely",
        excerpt: "Tips and tricks for purchasing quality used electronics...",
        date: "Oct 15, 2024",
        content:
          "When buying used electronics, it's important to inspect items carefully for damage, wear, and structural integrity. Look for signs of bed bugs, water damage, and stains. Always test drawers, hinges, and moving parts. Negotiate prices fairly and ask about the electronics's history. Consider delivery options and return policies. Buy from reputable with good reviews. Check for any recalls on specific electronics and furnitures items. Take measurements to ensure the electronics and furnitures fits your space. Ask about the original purchase date and warranty information.",
      },
      {
        id: "best-prices-used-ac-units",
        title: "Best Prices for Used AC Units",
        excerpt: "Find the best deals on used air conditioners in Tabuk...",
        date: "Oct 10, 2024",
        content:
          "Used air conditioning units can save you significant money while still providing excellent cooling performance. When shopping for used AC units, check the cooling capacity (BTU rating) to match your room size. Verify that the unit is in working condition and has been properly maintained. Look for units from reputable brands known for durability. Compare prices across multiple to find the best deals. Consider the age of the unit and remaining lifespan. Check if the unit includes installation support. Ask about warranty coverage and return policies. Energy efficiency ratings are important for long-term savings.",
      },
      {
        id: "electronics-care-guide",
        title: "electronics and furnitures Care Guide",
        excerpt: "Learn how to maintain your used electronics and furnitures properly...",
        date: "Oct 5, 2024",
        content:
          "Proper maintenance extends the life of your used electronics and furnitures significantly. Dust regularly with a soft cloth to prevent buildup. Use appropriate cleaners for different materials - wood, leather, fabric, and metal each require specific care. Avoid direct sunlight to prevent fading and damage. Keep electronics and furnitures away from heat sources and moisture. Rotate cushions regularly for even wear. Repair small issues immediately to prevent larger problems. Use protective covers for high-traffic areas. Clean spills immediately to prevent staining. Store electronics and furnitures properly if not in use. Consider professional cleaning for valuable pieces.",
      },
    ],
  },
  ar: {
    title: "أحدث المقالات",
    posts: [
      {
        id: "buy-used-electronics-safely",
        title: "كيفية شراء الأثاث المستعمل بأمان",
        excerpt: "نصائح وحيل لشراء أثاث مستعمل عالي الجودة...",
        date: "15 أكتوبر 2024",
        content:
          "عند شراء الأثاث المستعمل، من المهم فحص العناصر بعناية للتحقق من الأضرار والتآكل والسلامة الهيكلية. ابحث عن علامات بق الفراش والأضرار المائية والبقع. اختبر الأدراج والمفصلات والأجزاء المتحركة. تفاوض على الأسعار بعدالة واسأل عن تاريخ الأثاث. فكر في خيارات التسليم وسياسات الإرجاع. اشتر من البائعين ذوي السمعة الطيبة والتقييمات الجيدة. تحقق من أي استدعاءات لعناصر أثاث معينة. خذ القياسات للتأكد من أن الأثاث يناسب مساحتك. اسأل عن تاريخ الشراء الأصلي ومعلومات الضمان.",
      },
      {
        id: "best-prices-used-ac-units",
        title: "أفضل الأسعار للمكيفات المستعملة",
        excerpt: "ابحث عن أفضل العروض على المكيفات المستعملة في تبوك...",
        date: "10 أكتوبر 2024",
        content:
          "يمكن لوحدات تكييف الهواء المستعملة أن توفر لك أموالاً كبيرة مع توفير أداء تبريد ممتاز. عند التسوق لشراء وحدات تكييف مستعملة، تحقق من سعة التبريد (تصنيف BTU) لمطابقة حجم غرفتك. تحقق من أن الوحدة تعمل بشكل صحيح وتم صيانتها بشكل صحيح. ابحث عن وحدات من العلامات التجارية الموثوقة المعروفة بمتانتها. قارن الأسعار عبر عدة بائعين للعثور على أفضل العروض. فكر في عمر الوحدة والعمر الافتراضي المتبقي. تحقق مما إذا كانت الوحدة تتضمن دعم التثبيت. اسأل عن تغطية الضمان وسياسات الإرجاع. تصنيفات كفاءة الطاقة مهمة للتوفير على المدى الطويل.",
      },
      {
        id: "electronics-care-guide",
        title: "دليل العناية بالأثاث",
        excerpt: "تعلم كيفية الحفاظ على أثاثك المستعمل بشكل صحيح...",
        date: "5 أكتوبر 2024",
        content:
          "الصيانة الصحيحة تطيل عمر أثاثك المستعمل بشكل كبير. امسح الغبار بانتظام بقطعة قماش ناعمة لمنع التراكم. استخدم منظفات مناسبة للمواد المختلفة - الخشب والجلد والقماش والمعادن تتطلب كل منها عناية محددة. تجنب أشعة الشمس المباشرة لمنع الاختفاء والأضرار. احفظ الأثاث بعيداً عن مصادر الحرارة والرطوبة. قلب الوسائد بانتظام للتآكل المتساوي. أصلح المشاكل الصغيرة على الفور لمنع المشاكل الأكبر. استخدم أغطية واقية للمناطق عالية الحركة. نظف الانسكابات على الفور لمنع البقع. قم بتخزين الأثاث بشكل صحيح إذا لم يكن قيد الاستخدام.",
      },
    ],
  },
}

export default function Blog({ language }: BlogProps) {
  const t = translations[language]

  return (
    <section id="blog" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">{t.title}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {t.posts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src={`/blog-electronics-.jpg?height=200&width=400&query=blog-electronics-${post.id}`}
                alt={post.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
              <h3 className="text-xl font-bold text-foreground mb-3">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}?lang=${language}`} className="text-primary font-semibold hover:underline">
                {language === "en" ? "Read More" : "اقرأ المزيد"} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
