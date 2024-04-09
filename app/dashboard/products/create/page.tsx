import Form from '@/app/ui/products/create-form';
// import Breadcrumbs from '@/app/ui/categories/breadcrumbs';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Invoice',
};

export default async function Page() {
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
      <Form />
    </main>
  );
}
