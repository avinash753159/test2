'use client';
import { fscs } from '@/data/fscs';
import { useLocalStorage } from '@/lib/useLocalStorage';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/page-wrapper';

export default function FSCsPage() {
  const [selected, setSelected] = useLocalStorage<string[]>('fscs', []);

  function toggle(value: string) {
    setSelected(sel =>
      sel.includes(value) ? sel.filter(s => s !== value) : [...sel, value]
    );
  }

  return (
    <PageWrapper>
    <Card className="p-4 space-y-2">
      <h2 className="text-lg font-semibold">FSCs</h2>
      <div className="flex flex-wrap gap-2">
        {fscs.map(f => (
          <Button
            key={f}
            variant={selected.includes(f) ? 'default' : 'outline'}
            onClick={() => toggle(f)}
          >
            {f}
          </Button>
        ))}
      </div>
      <div className="space-x-2">
        {selected.map(f => (
          <span key={f} className="inline-block rounded bg-sky-600 px-2 py-1 text-white text-xs">
            {f}
          </span>
        ))}
      </div>
    </Card>
    </PageWrapper>
  );
}
