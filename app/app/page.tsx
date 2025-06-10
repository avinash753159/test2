import { Card } from '@/components/ui/card';
import { Table, THead, TBody, TR, TH, TD } from '@/components/ui/table';
import Link from 'next/link';
import { stats, latestRFQs } from '@/data/dashboard';
import PageWrapper from '@/components/page-wrapper';

export default function DashboardPage() {
  return (
    <PageWrapper>
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="p-4">
            <h3 className="text-sm font-medium">Contracts Won</h3>
            <p className="text-2xl font-bold">{stats.contractsWon}</p>
          </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium">Awards $</h3>
          <p className="text-2xl font-bold">${stats.awards.toLocaleString()}</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium">Avg SPRS</h3>
          <p className="text-2xl font-bold">{stats.avgSPRS}</p>
        </Card>
      </div>
      <Card className="p-4">
        <h2 className="mb-2 text-lg font-semibold">Latest 5 RFQs</h2>
        <Table>
          <THead>
            <TR>
              <TH>RFQ #</TH>
              <TH>FSC</TH>
              <TH>Agency</TH>
              <TH>Qty</TH>
              <TH>Close Date</TH>
            </TR>
          </THead>
          <TBody>
            {latestRFQs.map(r => (
              <TR key={r.rfq}>
                <TD>{r.rfq}</TD>
                <TD>{r.fsc}</TD>
                <TD>{r.agency}</TD>
                <TD>{r.qty}</TD>
                <TD>{r.close}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
        <Link href="/app/rfqs" className="mt-2 block text-sm text-sky-600">
          View all RFQs
        </Link>
      </Card>
      </div>
    </PageWrapper>
  );
}
