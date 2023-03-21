import { LogoBlock, NavList } from '@/views/App/NavPanelContainer';

export default function NavPanel() {
  return (
    <div className=" w-72 border-r-2 flex flex-col relative z-50">
      <div className="fixed min-w-fit w-72 bg-emerald-600 p-3 h-screen dark:bg-gray-600">
        <LogoBlock />
        <NavList />
      </div>
    </div>
  );
}
