import { DarkModeIcon } from '@/components/DarkModeIcon';

export default function Header() {
  return (
    <header className="p-4 h-24 bg-yellow-100 w-full flex justify-between items-center border-b-2 sticky top-0 shrink-0 dark:bg-gray-700 dark:text-white">
      Header
      <DarkModeIcon />
    </header>
  );
}
