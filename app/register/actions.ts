'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function registerAction(formData: FormData) {
  const email = formData.get('email');
  if (email) {
    cookies().set('auth', 'true');
  }
  redirect('/app');
}
