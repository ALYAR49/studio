import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Minimalist Tasarımın Gücü",
    description: "Azın ne kadar çok olabileceğini ve minimalist tasarım ilkelerinin projelerinizi nasıl dönüştürebileceğini keşfedin...",
    image: "https://placehold.co/600x400.png",
    aiHint: "minimalist architecture",
    link: "#"
  },
  {
    title: "Tasarımda Renk Psikolojisi",
    description: "Renklerin kullanıcı duyguları ve davranışları üzerindeki etkisini anlayarak daha etkili tasarımlar oluşturun.",
    image: "https://placehold.co/600x400.png",
    aiHint: "color wheel",
    link: "#"
  },
  {
    title: "Etkileşimli Web Deneyimleri Yaratmak",
    description: "Kullanıcıları büyüleyen ve markanızı güçlendiren dinamik ve etkileşimli web siteleri nasıl oluşturulur?",
    image: "https://placehold.co/600x400.png",
    aiHint: "interactive website",
    link: "#"
  },
    {
    title: "SEO Dostu İçerik Stratejileri",
    description: "Arama motorlarında üst sıralara çıkmak için içeriğinizi nasıl optimize edebilirsiniz? Etkili ipuçları ve stratejiler.",
    image: "https://placehold.co/600x400.png",
    aiHint: "seo content",
    link: "#"
  },
];

export default function YazilarPage() {
  return (
    <div>
      <h1 className="text-4xl font-headline mb-2">Yazılar</h1>
      <p className="text-muted-foreground mb-8">Tasarım, teknoloji ve yaratıcılık üzerine düşüncelerim.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <Card key={article.title} className="flex flex-col">
            <CardHeader>
              <div className="aspect-video overflow-hidden rounded-md mb-4">
                 <Image src={article.image} alt={article.title} width={600} height={400} className="object-cover w-full h-full" data-ai-hint={article.aiHint} />
              </div>
              <CardTitle className="font-headline text-2xl">{article.title}</CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow" />
            <CardFooter>
              <Button asChild variant="secondary" className="w-full">
                <Link href={article.link}>
                  Devamını Oku <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
