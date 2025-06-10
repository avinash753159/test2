'use client';
import { useState, useMemo } from 'react';
import { rfqs, RFQ } from '@/data/rfqs';
import { Table, THead, TBody, TR, TH, TD } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { useLocalStorage } from '@/lib/useLocalStorage';
import PageWrapper from '@/components/page-wrapper';

export default function RFQsPage() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const perPage = 5;
  const filtered = useMemo(() =>
    rfqs.filter(r =>
      r.rfq.toLowerCase().includes(search.toLowerCase()) ||
      r.fsc.includes(search)
    ), [search]);

  const paged = filtered.slice(page * perPage, (page + 1) * perPage);
  const pages = Math.ceil(filtered.length / perPage);
  const [ignored, setIgnored] = useLocalStorage<string[]>('ignored', []);

  return (
    <PageWrapper>
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-64"
        />
      </div>
      <Table>
        <THead>
          <TR>
            <TH></TH>
            <TH>RFQ #</TH>
            <TH>FSC</TH>
            <TH>Agency</TH>
            <TH>Qty</TH>
            <TH>Close Date</TH>
            <TH></TH>
          </TR>
        </THead>
        <TBody>
          {paged.map((r, i) => (
            <TR key={r.rfq} className={ignored.includes(r.rfq) ? 'opacity-50' : ''}>
              <TD>
                <input type="checkbox" />
              </TD>
              <TD>{r.rfq}</TD>
              <TD>{r.fsc}</TD>
              <TD>{r.agency}</TD>
              <TD>{r.qty}</TD>
              <TD>{r.close}</TD>
              <TD className="space-x-2">
                <Dialog trigger={<Button variant="outline">View</Button>} title={r.rfq}>
                  <pre className="text-sm">{JSON.stringify(r, null, 2)}</pre>
                </Dialog>
                <Button variant="outline">CSV</Button>
                <Button variant="outline" onClick={() => setIgnored([...ignored, r.rfq])}>
                  Ignore
                </Button>
              </TD>
            </TR>
          ))}
        </TBody>
      </Table>
      <div className="flex justify-between">
        <Button variant="outline" disabled={page === 0} onClick={() => setPage(p => p - 1)}>
          Previous
        </Button>
        <span>
          Page {page + 1} of {pages}
        </span>
        <Button variant="outline" disabled={page + 1 >= pages} onClick={() => setPage(p => p + 1)}>
          Next
        </Button>
      </div>
    </div>
    </PageWrapper>
  );
}
