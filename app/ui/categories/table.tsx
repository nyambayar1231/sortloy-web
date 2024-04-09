import Image from 'next/image';
import { UpdateCategory, DeleteCategory } from '@/app/ui/categories/buttons';
import { fetchFilteredCategories } from '@/app/lib/data/categories';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const categories = await fetchFilteredCategories(query);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {categories?.map((category) => (
              <div
                key={category.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center  border-b pb-4">
                  <p>{category.name}</p>
                </div>
                <div className="flex items-center  border-b pb-4">
                  <p>{category.code}</p>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <UpdateCategory id={category.id} />
                    <DeleteCategory id={category.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Нэр
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Код
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {categories?.map((category) => (
                <tr
                  key={category.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{category.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {category.code}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateCategory id={category?.id} />
                      <DeleteCategory id={category?.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
