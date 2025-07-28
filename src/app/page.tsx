/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useIsMobile } from '@/hooks/use-mobile';
import { CalendarDays, ArrowRightCircle } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  created_at: string;
}

export default function HomePage() {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchLatestPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('id, title, content, image_url, created_at')
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) {
         // `error` nesnesi doluysa, bu bir ağ hatası veya başka bir sorun olabilir.
         console.error("Error fetching latest posts:", error);
         setFetchError("Yazılar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
      } else if (!data || data.length === 0) {
        // RLS (Row-Level Security) politikaları genellikle bir hata fırlatmadan boş bir
        // veri dizisi döndürür. Bu durumu burada ele alarak kullanıcıya yol gösteriyoruz.
        console.error("No data received, check RLS policies.");
        setFetchError("Veritabanı Okuma İzniniz Eksik! Lütfen projenizdeki INSTRUCTIONS.md dosyasını açın ve 'Veritabanı Tablolarını Oluşturun' başlığı altındaki SQL komutlarını Supabase projenizde çalıştırın.");
      } else {
        setLatestPosts(data);
      }
      setLoading(false);
    };

    fetchLatestPosts();
  }, []);

  const formatTurkishDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('tr-TR', options);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Yükleniyor...</div>;
  }

  if (fetchError) {
    return <div className="flex justify-center items-center h-screen text-center text-red-500 max-w-2xl mx-auto p-4">{fetchError}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-6">Son Yazılar</h2>
        {latestPosts.length > 0 ? (
          <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {latestPosts.map((post) => (
              <div key={post.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
                {post.image_url && (
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image_url}
                      alt={post.title}
                      fill
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                )}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">{post.content}</p>
                  <div className="text-sm text-gray-500 mb-2 flex items-center">
                    <CalendarDays className="mr-1 w-4 h-4" /> {formatTurkishDate(post.created_at)}
                  </div>
                  <Link href={`/yazilar/${post.id}`} passHref>
                    <Button variant="outline" className="w-full">
                      Daha Fazla Oku <ArrowRightCircle className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Henüz hiç yazı eklenmemiş.</p>
        )}
        {latestPosts.length > 0 && (
          <div className="text-center mt-8">
            <Link href="/yazilar" passHref>
              <Button size="lg">Tüm Yazıları Görüntüle</Button>
            </Link>
          </div>
        )}
      </section>

      {/* Add more sections as needed, e.g., About, Contact Preview */}

    </div>
  );
}
