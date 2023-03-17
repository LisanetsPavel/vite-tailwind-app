import { Header } from '@/views/App/Header';
import { NavPanel } from '@/views/App/NavPanelContainer';
import { ContentBlock } from '@/views/App/ContentBlock';

export default function AppLayout() {
  return (
    <div className="font-josefinSans flex h-screen">
      <NavPanel />
      <section className="flex grow flex-col w-[calc(100%-18rem)]">
        <Header />
        <ContentBlock />
      </section>
    </div>
  );
}
