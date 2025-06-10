'use client';
import { useLocalStorage } from '@/lib/useLocalStorage';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import PageWrapper from '@/components/page-wrapper';

export default function NotificationsPage() {
  const [daily, setDaily] = useLocalStorage<boolean>('daily', true);
  const [weekly, setWeekly] = useLocalStorage<boolean>('weekly', false);
  const [webhook, setWebhook] = useLocalStorage<string>('webhook', '');

  return (
    <PageWrapper>
    <Card className="p-4 space-y-4">
      <h2 className="text-lg font-semibold">Notifications</h2>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={daily} onChange={e => setDaily(e.target.checked)} />
        Daily Email
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={weekly} onChange={e => setWeekly(e.target.checked)} />
        Weekly Digest
      </label>
      <div>
        <Input
          value={webhook}
          onChange={e => setWebhook(e.target.value)}
          placeholder="Slack/Webhook URL"
        />
      </div>
    </Card>
    </PageWrapper>
  );
}
