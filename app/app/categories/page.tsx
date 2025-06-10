'use client';
import { categories } from '@/data/categories';
import { useLocalStorage } from '@/lib/useLocalStorage';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/page-wrapper';

export default function CategoriesPage() {
  const [selected, setSelected] = useLocalStorage<string[]>('categories', []);

  function toggle(value: string) {
    setSelected(sel =>
      sel.includes(value) ? sel.filter(s => s !== value) : [...sel, value]
    );
  }

  return (
    <PageWrapper>
    <Card className="p-4 space-y-2">
      <h2 className="text-lg font-semibold">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map(c => (
          <Button
            key={c}
            variant={selected.includes(c) ? 'default' : 'outline'}
            onClick={() => toggle(c)}
          >
            {c}
          </Button>
        ))}
      </div>
      <div className="space-x-2">
        {selected.map(c => (
          <span key={c} className="inline-block rounded bg-sky-600 px-2 py-1 text-white text-xs">
            {c}
          </span>
        ))}
      </div>
    </Card>
    </PageWrapper>
  );
}
