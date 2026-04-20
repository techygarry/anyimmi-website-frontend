import {
  FileText, Image, Megaphone, Mail, Bookmark, Globe, Layout, Palette,
  PenTool, Monitor, Smartphone, Share2, BarChart3, Users, Heart, Star,
  Award, Briefcase, Building2, GraduationCap, Plane, MapPin, Phone,
  Calendar, Clock, Shield, Flag, Zap, Target, TrendingUp,
  Landmark, ClipboardCheck, BookOpen, Rocket, Gift, Cog, Sparkles, Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  FileText, Image, Megaphone, Mail, Bookmark, Globe, Layout, Palette,
  PenTool, Monitor, Smartphone, Share2, BarChart3, Users, Heart, Star,
  Award, Briefcase, Building2, GraduationCap, Plane, MapPin, Phone,
  Calendar, Clock, Shield, Flag, Zap, Target, TrendingUp,
  Landmark, ClipboardCheck, BookOpen, Rocket, Gift, Cog, Sparkles, Settings,
};

interface CategoryIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function CategoryIcon({ name, size = 40, className }: CategoryIconProps) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}
