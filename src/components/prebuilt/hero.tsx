import Link from 'next/link';
import FastAPILogo from '../fastapi-logo';
import NextLogo from '../next-logo';
import SupabaseLogo from '../supabase-logo';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-black">just another</p>
      <div className="flex gap-8 justify-center items-center">
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <NextLogo />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a>
        <span className="border-10 rotate-45 h-6" />
        <div className="flex items-center justify-between font-semibold">
          <a
            href="https://fastapi.tiangolo.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FastAPILogo />
          </a>
          <Link href="https://fastapi.tiangolo.com/">
            <p className="text-lg">FastAPI</p>
          </Link>
        </div>
      </div>
      <p className="text-black">starter template</p>
      <div className="p-20 space-x-6">
        <Button>
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button>
          <Link href="/about">About</Link>
        </Button>
      </div>
    </div>
  );
}
