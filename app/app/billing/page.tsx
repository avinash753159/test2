'use client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/page-wrapper';

export default function BillingPage() {
  return (
    <PageWrapper>
    <Card className="p-4 space-y-4 max-w-xl">
      <h2 className="text-lg font-semibold">Billing</h2>
      <div>
        <p className="font-medium">Current Plan: Starter</p>
        <p>Usage: 50 / 100 RFQs</p>
      </div>
      <div className="space-x-2">
        <Button>Upgrade</Button>
        <Button variant="outline">Cancel</Button>
      </div>
    </Card>
    </PageWrapper>
  );
}
