import Loader from './Loader';
import ProgressBar from './ProgressBar';
import SideToggle from './SideToggle';
import Header from './Header';

interface PageLayoutProps {
  children: React.ReactNode;
  bodyBg?: string;
}

export default function PageLayout({ children, bodyBg }: PageLayoutProps) {
  return (
    <div style={bodyBg ? { background: bodyBg } : undefined}>
      <Loader />
      <ProgressBar />
      <SideToggle />
      <div className="has-smooth" id="has_smooth"></div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}
