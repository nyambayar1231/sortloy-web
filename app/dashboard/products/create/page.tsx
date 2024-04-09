import { fetchFilteredCategories } from '@/app/lib/data/categories';
import Form from '@/app/ui/products/create-form';
// import Breadcrumbs from '@/app/ui/categories/breadcrumbs';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default async function Page() {
  const categories = await fetchFilteredCategories();

  return (
    <main>
      {/* <Breadcrumbs
        breadcrumbs={[
          { label: 'Ангилал', href: '/dashboard/categories' },
          {
            label: 'Create Invoice Ангилал Үүсгэх',
            href: '/dashboard/categories/create',
            active: true,
          },
        ]}
      /> */}
      <Form categories={categories} />
    </main>
  );
}
