import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { forgotAction } from './actions';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-4">
        <h1 className="text-xl font-semibold">Forgot Password</h1>
        <form action={forgotAction} className="space-y-4">
          <Input name="email" type="email" placeholder="Email" required />
          <Button type="submit" className="w-full">Send reset link</Button>
        </form>
        <div className="text-sm">
          <Link href="/login">Back to login</Link>
        </div>
      </Card>
    </div>
  );
}
