'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import {
  CurrencyDollarIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createProduct } from '@/app/lib/actions/products';
import { CategoryField } from '@/app/lib/definitions';

// export default function Form({ customers }: { customers: CustomerField[] }) {

export default function Form({ categories }: { categories: CategoryField[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createProduct, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Product Category */}
        <div className="mb-4">
          <label
            htmlFor="categoryId"
            className="mb-2 block text-sm font-medium"
          >
            Ангилал сонгох
          </label>
          <div className="relative">
            <select
              id="category"
              name="categoryId"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              typeof="number"
              aria-describedby="category-error"
            >
              <option value="" disabled>
                Ангилал сонгох
              </option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          {state.errors?.categoryId ? (
            <div
              id="category-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.categoryId.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Product name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Нэр
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                step="0.01"
                placeholder="Барааны нэрийг оруулна уу ..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="name-error"
                required
              />
              <ShoppingBagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {state.errors?.name ? (
            <div
              id="name-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.name.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Product description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium"
          >
            Тайлбар
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="description"
                name="description"
                type="text"
                step="0.01"
                placeholder="Барааны тайлбарыг оруулна уу ..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="description-error"
              />
              <ShoppingBagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {state.errors?.description ? (
            <div
              id="description-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.description.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Product Code */}
        <div className="mb-4">
          <label htmlFor="code" className="mb-2 block text-sm font-medium">
            Код
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="code"
                name="code"
                type="text"
                step="0.01"
                placeholder="Барааны кодыг оруулна уу ..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="code-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {state.errors?.code ? (
            <div
              id="code-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.code.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/*Product Price */}
        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Үнэ
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                placeholder="Барааны үнийг оруулна уу ..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="price-error"
                required
              />
              <ShoppingBagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {state.errors?.price ? (
            <div
              id="price-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.price.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Product image */}
        <div className="mb-4">
          <label className="mb-2 text-sm font-medium flex gap-4">
            Зураг
            <svg
              className="w-5 h-5 hover:cursor-pointer transform-gpu active:scale-75 transition-all text-neutral-500"
              aria-label="Attach media"
              role="img"
              viewBox="0 0 20 20"
            >
              <title>Attach media</title>
              <path
                d="M13.9455 9.0196L8.49626 14.4688C7.16326 15.8091 5.38347 15.692 4.23357 14.5347C3.07634 13.3922 2.9738 11.6197 4.30681 10.2794L11.7995 2.78669C12.5392 2.04694 13.6745 1.85651 14.4289 2.60358C15.1833 3.3653 14.9855 4.4859 14.2458 5.22565L6.83367 12.6524C6.57732 12.9088 6.28435 12.8355 6.10124 12.6671C5.94011 12.4986 5.87419 12.1983 6.12322 11.942L11.2868 6.78571C11.6091 6.45612 11.6164 5.97272 11.3088 5.65778C10.9938 5.35749 10.5031 5.35749 10.1808 5.67975L4.99529 10.8653C4.13835 11.7296 4.1823 13.0626 4.95134 13.8316C5.77898 14.6592 7.03874 14.6446 7.903 13.7803L15.3664 6.32428C16.8678 4.81549 16.8312 2.83063 15.4909 1.4903C14.1799 0.179264 12.1584 0.106021 10.6496 1.60749L3.10564 9.16608C1.16472 11.1143 1.27458 13.9268 3.06169 15.7139C4.8488 17.4937 7.6613 17.6109 9.60955 15.6773L15.1027 10.1841C15.4103 9.87653 15.4103 9.30524 15.0881 9.00495C14.7878 8.68268 14.2677 8.70465 13.9455 9.0196Z"
                className="fill-current"
              ></path>
            </svg>
            <input
              className="bg-transparent flex-1 border-none outline-none hidden"
              name="media"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm"
            />
          </label>
          {state.errors?.media ? (
            <div
              id="name-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.media.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/products"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Болих
        </Link>
        <Button type="submit">Бараа Үүсгэх</Button>
      </div>
    </form>
  );
}
