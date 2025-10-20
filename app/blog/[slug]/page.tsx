"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { useState, use } from "react"

const blogPosts = {
  en: {
    "buy-used-furniture-safely": {
      title: "How to Buy Used Furniture Safely",
      date: "Oct 15, 2024",
      content:
        "When buying used furniture, it's important to inspect items carefully for damage, wear, and structural integrity. Look for signs of bed bugs, water damage, and stains. Always test drawers, hinges, and moving parts. Negotiate prices fairly and ask about the furniture's history. Consider delivery options and return policies. Buy from reputable sellers with good reviews. Check for any recalls on specific furniture items. Take measurements to ensure the furniture fits your space. Ask about the original purchase date and warranty information.\n\nInspecting the furniture thoroughly before purchase is crucial. Check all joints and connections to ensure they are secure. Look for any signs of pest infestation or mold. Test all moving parts multiple times to ensure they work smoothly. Ask the seller about the furniture's age and any repairs that have been made.\n\nWhen negotiating, research similar items online to understand fair market prices. Don't hesitate to walk away if the price seems too high or the condition is poor. Always get a receipt with a description of the item and any agreed-upon terms. Consider having the furniture professionally inspected if it's a high-value piece.",
    },
    "best-prices-used-ac-units": {
      title: "Best Prices for Used AC Units",
      date: "Oct 10, 2024",
      content:
        "Used air conditioning units can save you significant money while still providing excellent cooling performance. When shopping for used AC units, check the cooling capacity (BTU rating) to match your room size. Verify that the unit is in working condition and has been properly maintained. Look for units from reputable brands known for durability. Compare prices across multiple sellers to find the best deals. Consider the age of the unit and remaining lifespan. Check if the unit includes installation support. Ask about warranty coverage and return policies. Energy efficiency ratings are important for long-term savings.\n\nUnderstanding BTU ratings is essential for choosing the right AC unit. A general rule is to have 20 BTU per square foot of space. For a 300 square foot room, you would need approximately 6,000 BTU. However, factors like ceiling height, insulation, and sun exposure can affect this calculation.\n\nWhen evaluating used units, ask about the maintenance history. Units that have been regularly serviced tend to last longer and perform better. Check if the refrigerant is still at proper levels. Ask about the age of the compressor, as this is the most expensive component to replace. Consider buying from sellers who offer some form of warranty or guarantee.",
    },
    "furniture-care-guide": {
      title: "Furniture Care Guide",
      date: "Oct 5, 2024",
      content:
        "Proper maintenance extends the life of your used furniture significantly. Dust regularly with a soft cloth to prevent buildup. Use appropriate cleaners for different materials - wood, leather, fabric, and metal each require specific care. Avoid direct sunlight to prevent fading and damage. Keep furniture away from heat sources and moisture. Rotate cushions regularly for even wear. Repair small issues immediately to prevent larger problems. Use protective covers for high-traffic areas. Clean spills immediately to prevent staining. Store furniture properly if not in use. Consider professional cleaning for valuable pieces.\n\nFor wooden furniture, use a soft, damp cloth to dust and a wood-specific cleaner for deeper cleaning. Avoid excessive water as it can damage the wood. Polish wooden furniture occasionally to maintain its shine and protect the surface. For leather furniture, use a leather conditioner to keep it supple and prevent cracking.\n\nFabric furniture requires regular vacuuming to remove dust and debris. For stains, act quickly and use appropriate fabric cleaners. Test any cleaner on a hidden area first to ensure it doesn't damage the fabric. Metal furniture should be wiped down regularly and checked for rust. Apply a protective coating if rust appears.",
    },
  },
  ar: {
    "buy-used-furniture-safely": {
      title: "كيفية شراء الأثاث المستعمل بأمان",
      date: "15 أكتوبر 2024",
      content:
        "عند شراء الأثاث المستعمل، من المهم فحص العناصر بعناية للتحقق من الأضرار والتآكل والسلامة الهيكلية. ابحث عن علامات بق الفراش والأضرار المائية والبقع. اختبر الأدراج والمفصلات والأجزاء المتحركة. تفاوض على الأسعار بعدالة واسأل عن تاريخ الأثاث. فكر في خيارات التسليم وسياسات الإرجاع. اشتر من البائعين ذوي السمعة الطيبة والتقييمات الجيدة. تحقق من أي استدعاءات لعناصر أثاث معينة. خذ القياسات للتأكد من أن الأثاث يناسب مساحتك. اسأل عن تاريخ الشراء الأصلي ومعلومات الضمان.\n\nفحص الأثاث بدقة قبل الشراء أمر بالغ الأهمية. تحقق من جميع المفاصل والاتصالات للتأكد من أنها آمنة. ابحث عن أي علامات على الإصابة بالآفات أو العفن. اختبر جميع الأجزاء المتحركة عدة مرات للتأكد من أنها تعمل بسلاسة. اسأل البائع عن عمر الأثاث وأي إصلاحات تم إجراؤها.\n\nعند التفاوض، ابحث عن عناصر مماثلة عبر الإنترنت لفهم أسعار السوق العادلة. لا تتردد في الرحيل إذا كان السعر مرتفعاً جداً أو كانت الحالة سيئة. احصل دائماً على إيصال يتضمن وصفاً للعنصر وأي شروط متفق عليها.",
    },
    "best-prices-used-ac-units": {
      title: "أفضل الأسعار للمكيفات المستعملة",
      date: "10 أكتوبر 2024",
      content:
        "يمكن لوحدات تكييف الهواء المستعملة أن توفر لك أموالاً كبيرة مع توفير أداء تبريد ممتاز. عند التسوق لشراء وحدات تكييف مستعملة، تحقق من سعة التبريد (تصنيف BTU) لمطابقة حجم غرفتك. تحقق من أن الوحدة تعمل بشكل صحيح وتم صيانتها بشكل صحيح. ابحث عن وحدات من العلامات التجارية الموثوقة المعروفة بمتانتها. قارن الأسعار عبر عدة بائعين للعثور على أفضل العروض. فكر في عمر الوحدة والعمر الافتراضي المتبقي. تحقق مما إذا كانت الوحدة تتضمن دعم التثبيت. اسأل عن تغطية الضمان وسياسات الإرجاع. تصنيفات كفاءة الطاقة مهمة للتوفير على المدى الطويل.\n\nفهم تصنيفات BTU ضروري لاختيار وحدة تكييف مناسبة. القاعدة العامة هي الحصول على 20 BTU لكل قدم مربع من المساحة. بالنسبة لغرفة بمساحة 300 قدم مربع، ستحتاج إلى حوالي 6000 وحدة حرارية بريطانية. ومع ذلك، يمكن لعوامل مثل ارتفاع السقف والعزل والتعرض للشمس أن تؤثر على هذا الحساب.\n\nعند تقييم الوحدات المستعملة، اسأل عن سجل الصيانة. الوحدات التي تم صيانتها بانتظام تميل إلى أن تستمر لفترة أطول وتعمل بشكل أفضل.",
    },
    "furniture-care-guide": {
      title: "دليل العناية بالأثاث",
      date: "5 أكتوبر 2024",
      content:
        "الصيانة الصحيحة تطيل عمر أثاثك المستعمل بشكل كبير. امسح الغبار بانتظام بقطعة قماش ناعمة لمنع التراكم. استخدم منظفات مناسبة للمواد المختلفة - الخشب والجلد والقماش والمعادن تتطلب كل منها عناية محددة. تجنب أشعة الشمس المباشرة لمنع الاختفاء والأضرار. احفظ الأثاث بعيداً عن مصادر الحرارة والرطوبة. قلب الوسائد بانتظام للتآكل المتساوي. أصلح المشاكل الصغيرة على الفور لمنع المشاكل الأكبر. استخدم أغطية واقية للمناطق عالية الحركة. نظف الانسكابات على الفور لمنع البقع. قم بتخزين الأثاث بشكل صحيح إذا لم يكن قيد الاستخدام. فكر في التنظيف المهني للقطع ذات القيمة العالية.\n\nبالنسبة للأثاث الخشبي، استخدم قطعة قماش ناعمة ورطبة للتنظيف ومنظف خاص بالخشب للتنظيف الأعمق. تجنب الماء الزائد لأنه قد يضر الخشب. لمع الأثاث الخشبي من حين لآخر للحفاظ على لمعانه وحماية السطح.",
    },
  },
}

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const searchParams = useSearchParams()
  const language = (searchParams.get("lang") as "en" | "ar") || "en"
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "ar">(language)
  
  // Unwrap the params Promise using React.use()
  const unwrappedParams = use(params)
  const slug = unwrappedParams.slug

  const post = blogPosts[currentLanguage]?.[slug as keyof typeof blogPosts.en]

  if (!post) {
    return (
      <div dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
        <Header language={currentLanguage} setLanguage={setCurrentLanguage} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              {currentLanguage === "en" ? "Post Not Found" : "المقالة غير موجودة"}
            </h1>
            <Link href="/" className="text-primary font-semibold hover:underline">
              {currentLanguage === "en" ? "Back to Home" : "العودة إلى الرئيسية"}
            </Link>
          </div>
        </div>
        <Footer language={currentLanguage} />
      </div>
    )
  }

  return (
    <div dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
      <Header language={currentLanguage} setLanguage={setCurrentLanguage} />

      <main className="min-h-screen py-20 bg-background">
        <article className="max-w-3xl mx-auto px-4">
          {/* Back button */}
          <Link href="/#blog" className="text-primary font-semibold hover:underline mb-8 inline-block">
            {currentLanguage === "en" ? "← Back to Blog" : "← العودة إلى المدونة"}
          </Link>

          {/* Featured image */}
          <img
            src={`/blog-.jpg?height=400&width=800&query=blog-${slug}`}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />

          {/* Post header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
            <p className="text-muted-foreground text-lg">{post.date}</p>
          </header>

          {/* Post content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-foreground leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related posts section */}
          <div className="mt-16 pt-8 border-t border-muted">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {currentLanguage === "en" ? "Related Posts" : "مقالات ذات صلة"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(blogPosts[currentLanguage])
                .filter(([relatedSlug]) => relatedSlug !== slug)
                .slice(0, 2)
                .map(([relatedSlug, relatedPost]) => (
                  <Link
                    key={relatedSlug}
                    href={`/blog/${relatedSlug}?lang=${currentLanguage}`}
                    className="p-4 border border-muted rounded-lg hover:shadow-md transition"
                  >
                    <h3 className="font-bold text-foreground mb-2">{relatedPost.title}</h3>
                    <p className="text-sm text-muted-foreground">{relatedPost.date}</p>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>

      <Footer language={currentLanguage} />
      <WhatsAppButton />
    </div>
  )
}