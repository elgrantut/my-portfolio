import { ArrowUpRight } from 'lucide-react';
import { ContactLink } from '@/data/contact';

interface ContactLinkCardProps {
  link: ContactLink;
}

export default function ContactLinkCard({ link }: ContactLinkCardProps) {
  const Icon = link.icon;

  if (link.href) {
    const isExternal = link.href.startsWith('http');

    return (
      <a
        href={link.href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-green-accent/50 transition-all group h-full"
      >
        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-lg bg-secondary text-muted-foreground group-hover:bg-green-accent/10 group-hover:text-green-accent transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{link.label}</p>
            <p className="font-medium text-foreground text-sm md:max-w-48 md:truncate">
              {link.value}
            </p>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-green-accent transition-colors" />
      </a>
    );
  }

  return (
    <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border h-full">
      <div className="flex items-center gap-4">
        <div className="p-2.5 rounded-lg bg-secondary text-muted-foreground">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{link.label}</p>
          <p className="font-medium text-foreground">{link.value}</p>
        </div>
      </div>
    </div>
  );
}
