'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UploadCloud } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

type MediaItem = {
  type: 'image' | 'video';
  url: string;
  title: string;
};

export default function MedyaEklePage() {
  const { toast } = useToast();
  const [form, setForm] = useState<MediaItem>({ type: 'image', url: '', title: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.url) {
      toast({
        variant: "destructive",
        title: "Eksik Bilgi",
        description: "Lütfen başlık ve URL alanlarını doldurun.",
      });
      return;
    }
    setIsSubmitting(true);

    const { error } = await supabase.from('media_items').insert({
      title: form.title,
      url: form.url,
      type: form.type,
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "Hata oluştu",
        description: "Medya eklenirken bir sorun oluştu: " + error.message,
      });
    } else {
      toast({
        title: "Başarılı!",
        description: "Medya galeriye başarıyla eklendi.",
      });
      setForm({ type: 'image', url: '', title: '' });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-headline mb-2">Medya Ekle</h1>
      <p className="text-muted-foreground mb-8">Galeri veya yazılarınız için yeni fotoğraf veya videolar yükleyin.</p>
      
      <Card>
        <CardHeader>
          <CardTitle>Yeni Medya Ekle</CardTitle>
          <CardDescription>Yüklenecek medyanın bilgilerini girin.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Başlık</Label>
              <Input
                id="title"
                type="text"
                placeholder="Örn: Harika bir günbatımı"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="url">Medya URL</Label>
              <Input
                id="url"
                type="url"
                placeholder="https://ornek.com/resim.jpg"
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
               <Label htmlFor="type">Medya Türü</Label>
              <Select
                value={form.type}
                onValueChange={(value: 'image' | 'video') => setForm({ ...form, type: value })}
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Medya türünü seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">Görsel</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              <UploadCloud className="mr-2" /> {isSubmitting ? 'Ekleniyor...' : 'Galeriye Ekle'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
