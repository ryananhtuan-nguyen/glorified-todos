import Link from 'next/link';
import { Medal } from 'lucide-react';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const headingFont = localFont({
  src: '../../public/fonts/font.woff2',
});

const textFont = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          'flex items-center justify-center flex-col',
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-red-200 text-blue-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          Best Task-Management of {format(new Date(), 'yyyy')}
        </div>
        <h1 className="text-3xl md:text-6xl text-center  text-neutral-800 mb-6">
          Glorified Todos helps teams elevate
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-blue-300 to-pink-400 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Project Momentum
        </div>
      </div>
      <div
        className={cn(
          'text-sm md:text-xl text-neutral-400 mt-12 mb-12 max-w-xs md:max-w-2xl text-left mx-auto',
          textFont.className
        )}
      >
        Foster collaboration, project management mastery, and attain
        unprecedented productivity heights. Whether your team operates from
        towering corporate offices or cozy home workspaces, embrace the
        uniqueness of your workflow—achieve it all with Glorified Todos.
      </div>
      <Button className="mt-6 bg-orange-400" size="lg" asChild>
        <Link href="/sign-up"> Get GlorifiedTodos for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
