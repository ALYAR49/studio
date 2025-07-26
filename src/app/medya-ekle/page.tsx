'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloud } from "lucide-react";
import { useState } from "react";

export default function MedyaEklePage() {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-headline mb-2">Medya Ekle</h1>
      <p className="text-muted-foreground mb-8">Galeri veya yazılarınız için yeni fotoğraf veya videolar yükleyin.</p>
      
      <Card>
        <CardHeader>
          <CardTitle>Dosya Yükleme</CardTitle>
          <CardDescription>Yüklenecek dosyayı seçin ve "Yükle" butonuna tıklayın.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="picture">Medya Dosyası</Label>
            <div className="flex items-center gap-4">
              <Input id="picture" type="file" onChange={handleFileChange} className="flex-1" />
            </div>
            {fileName && <p className="text-sm text-muted-foreground mt-2">Seçilen dosya: {fileName}</p>}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <UploadCloud className="mr-2" /> Yükle
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
