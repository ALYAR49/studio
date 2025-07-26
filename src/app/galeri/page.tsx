import { Card } from "@/components/ui/card";
import Image from "next/image";

const galleryItems = [
  { src: "https://placehold.co/600x400.png", alt: "Gallery image 1", aiHint: "abstract art" },
  { src: "https://placehold.co/400x600.png", alt: "Gallery image 2", aiHint: "cityscape night" },
  { src: "https://placehold.co/600x400.png", alt: "Gallery image 3", aiHint: "nature landscape" },
  { src: "https://placehold.co/600x400.png", alt: "Gallery image 4", aiHint: "portrait photography" },
  { src: "https://placehold.co/400x600.png", alt: "Gallery image 5", aiHint: "modern architecture" },
  { src: "https://placehold.co/600x400.png", alt: "Gallery image 6", aiHint: "minimalist design" },
  { src: "https://placehold.co/600x400.png", alt: "Gallery image 7", aiHint: "street art" },
  { src: "https://placehold.co/400x600.png", alt: "Gallery image 8", aiHint: "retro wave" },
];

export default function GaleriPage() {
  return (
    <div>
      <h1 className="text-4xl font-headline mb-2">Galeri</h1>
      <p className="text-muted-foreground mb-8">Projelerimden ve ilham kaynaklarımdan bir seçki.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item, index) => (
          <Card key={index} className="overflow-hidden group">
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={item.src.includes('400x600') ? 600 : 400}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={item.aiHint}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
