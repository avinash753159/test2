'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  if (email) {
    cookies().set('auth', 'true');
  }
  redirect('/app');
}
