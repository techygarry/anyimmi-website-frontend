import ProgressBar from './ProgressBar';
import SideToggle from './SideToggle';
import Header from './Header';
import FooterInner from './FooterInner';

export default async function InnerPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar />
      <SideToggle />
      <Header />
      <main>{children}</main>
      <FooterInner />
    </>
  );
}
