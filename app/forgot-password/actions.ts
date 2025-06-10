'use server';
import { redirect } from 'next/navigation';

export async function forgotAction(formData: FormData) {
  // pretend to send email
  redirect('/login');
}
