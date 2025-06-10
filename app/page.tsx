import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home() {
  const isAuth = cookies().get('auth')?.value === 'true';
  if (isAuth) {
    redirect('/app');
  }
  redirect('/login');
}
