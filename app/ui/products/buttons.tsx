import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateProduct() {
  return (
    <Link
      href="/dashboard/products/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Бараа үүсгэх</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

// export function UpdateCategory({ id }: { id: number }) {
//   return (
//     <Link
//       href={`/dashboard/categories/${id}/edit`}
//       className="rounded-md border p-2 hover:bg-gray-100"
//     >
//       <PencilIcon className="w-5" />
//     </Link>
//   );
// }

// export function DeleteCategory({ id }: { id: number }) {
//   const deleteCategoriesWithId = deleteCategories.bind(null, id);

//   return (
//     <form action={deleteCategoriesWithId}>
//       <button className="rounded-md border p-2 hover:bg-gray-100">
//         <span className="sr-only">Устгах</span>
//         <TrashIcon className="w-5" />
//       </button>
//     </form>
//   );
// }
