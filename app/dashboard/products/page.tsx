import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { CreateProduct } from '@/app/ui/products/buttons';

export const metadata: Metadata = {
  title: 'Бараа бүтээгдэхүүнүүд',
};

export default async function Page() {
  const totalPages = 10;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Бараа</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Бараа хайх..." /> */}
        <CreateProduct />
      </div>
      {/* <Suspense
    key={query + currentPage}
    fallback={<CategroiesTableSkeleton />}
  >
    <Table query={query} currentPage={currentPage} />
  </Suspense> */}
      {/* <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div> */}
    </div>
  );
}
