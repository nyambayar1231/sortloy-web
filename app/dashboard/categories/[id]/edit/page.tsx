import Form from '@/app/ui/categories/edit-form';
import Breadcrumbs from '@/app/ui/categories/breadcrumbs';
// import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { fetchCategoryById } from '@/app/lib/data/categories';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Category',
};

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;

  const category = await fetchCategoryById(id);

  if (!category) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Ангилал', href: '/dashboard/categories' },
          {
            label: 'Ангилал Засах',
            href: `/dashboard/categories/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form category={category} />
    </main>
  );
}
