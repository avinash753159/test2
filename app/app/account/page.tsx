'use client';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/page-wrapper';
import { useState } from 'react';

export default function AccountPage() {
  const [apiKey, setApiKey] = useState('abc123');
  const [show, setShow] = useState(false);

  function regenerate() {
    setApiKey(Math.random().toString(36).slice(2));
  }

  return (
    <PageWrapper>
    <Card className="p-4 space-y-4 max-w-xl">
      <h2 className="text-lg font-semibold">Profile</h2>
      <div className="space-y-2">
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Company" />
      </div>
      <div>
        <Button variant="outline" onClick={() => setShow(!show)}>
          {show ? 'Hide API Key' : 'Show API Key'}
        </Button>
        {show && <div className="mt-2 break-all font-mono text-sm">{apiKey}</div>}
        <Button variant="outline" className="mt-2" onClick={regenerate}>
          Regenerate
        </Button>
      </div>
    </Card>
    </PageWrapper>
  );
}
