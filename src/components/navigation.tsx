'use client';

import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Home, FileText, Image, UploadCloud, Mail, PenSquare } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Ana Sayfa', icon: Home },
  { href: '/yazilar', label: 'Yazılar', icon: FileText },
  { href: '/galeri', label: 'Galeri', icon: Image },
  { href: '/medya-ekle', label: 'Medya Ekle', icon: UploadCloud },
  { href: '/araclar/baslik-olustur', label: 'Başlık Aracı', icon: PenSquare },
  { href: '/iletisim', label: 'İletişim', icon: Mail },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <Link href="/" className="block">
          <h1 className="text-2xl font-headline text-center px-2 py-4 text-sidebar-foreground">
            🧑‍💻 Yusuf’un Blogu
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {links.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === link.href}
                className="justify-start"
              >
                <Link href={link.href}>
                  <link.icon className="size-4 mr-2" />
                  <span>{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
