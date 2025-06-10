import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { loginAction } from './actions';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-4">
        <h1 className="text-xl font-semibold">Login</h1>
        <form action={loginAction} className="space-y-4">
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="password" type="password" placeholder="Password" required />
          <Button type="submit" className="w-full">Login</Button>
        </form>
        <div className="flex justify-between text-sm">
          <Link href="/register">Register</Link>
          <Link href="/forgot-password">Forgot password?</Link>
        </div>
      </Card>
    </div>
  );
}
