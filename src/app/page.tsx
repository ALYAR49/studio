import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { List, ListItem } from "@/components/ui/list";
import { ArrowRight, PenSquare } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Son Eklenen Yazılar</CardTitle>
            <CardDescription>En yeni düşüncelerim ve keşiflerim.</CardDescription>
          </CardHeader>
          <CardContent>
            <List>
              <ListItem>
                <Link href="#" className="flex items-center justify-between group">
                  <span className="group-hover:text-primary transition-colors">📌 Minimalist Tasarımın Gücü</span>
                  <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" className="flex items-center justify-between group">
                  <span className="group-hover:text-primary transition-colors">🧠 Tasarımda Psikoloji</span>
                  <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" className="flex items-center justify-between group">
                  <span className="group-hover:text-primary transition-colors">🎨 Renk Paletleri ile Oynayın</span>
                  <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </ListItem>
               <ListItem>
                <Link href="#" className="flex items-center justify-between group">
                  <span className="group-hover:text-primary transition-colors">🚀 Yeni Projem: Blog & Portföy</span>
                  <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <div className="flex items-center gap-4">
              <PenSquare className="size-8 text-accent"/>
              <CardTitle className="font-headline text-2xl">Başlık Oluşturma Aracı</CardTitle>
            </div>
            <CardDescription className="text-primary-foreground/80 pt-2">
              Yapay zeka destekli aracımızla bir sonraki makaleniz için ilgi çekici başlıklar ve SEO anahtar kelimeleri oluşturun.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Yaratıcılığınızı serbest bırakın ve içeriğinizin öne çıkmasını sağlayın.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="secondary" className="w-full">
              <Link href="/araclar/baslik-olustur">
                Aracı Dene <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
