'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { List, ListItem } from "@/components/ui/list";
import { ArrowRight, PenSquare } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Post = {
  id: number;
  title: string;
};

export default function HomePage() {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      setLoading(true);
      setFetchError(null);
      const { data, error } = await supabase
        .from('posts')
        .select('id, title')
        .order('created_at', { ascending: false })
        .limit(4);

      // RLS policies can cause an error that doesn't get explicitly thrown,
      // but results in an empty data array. We handle this case here.
      if (error || !data) {
        console.error("Error fetching latest posts:", error);
        setFetchError("Yazılar yüklenemedi. Veritabanı okuma izinlerinizi (RLS) kontrol edin.");
      } else {
        setLatestPosts(data);
      }
      setLoading(false);
    };

    fetchLatestPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Son Eklenen Yazılar</CardTitle>
            <CardDescription>En yeni düşüncelerim ve keşiflerim.</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </div>
            ) : fetchError ? (
              <p className="text-destructive">{fetchError}</p>
            ) : (
              <List>
                {latestPosts.length > 0 ? (
                  latestPosts.map((post) => (
                    <ListItem key={post.id}>
                      <Link href={`/yazilar/${post.id}`} className="flex items-center justify-between group">
                        <span className="group-hover:text-primary transition-colors">📌 {post.title}</span>
                        <ArrowRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </ListItem>
                  ))
                ) : (
                   <ListItem className="text-center text-muted-foreground">Henüz yayınlanmış bir yazı yok.</ListItem>
                )}
              </List>
            )}
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
