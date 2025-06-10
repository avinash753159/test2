import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { registerAction } from './actions';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-4">
        <h1 className="text-xl font-semibold">Register</h1>
        <form action={registerAction} className="space-y-4">
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="password" type="password" placeholder="Password" required />
          <Button type="submit" className="w-full">Create account</Button>
        </form>
        <div className="text-sm">
          <Link href="/login">Already have an account?</Link>
        </div>
      </Card>
    </div>
  );
}
