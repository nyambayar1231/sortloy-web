'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import {
  CurrencyDollarIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions/categories';
import { CategoryField } from '@/app/lib/definitions';

// export default function Form({ customers }: { customers: CustomerField[] }) {

export default function Form({ categories }: { categories: CategoryField[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Product Category */}
        <div className="mb-4">
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            Ангилал сонгох
          </label>
          <div className="relative">
            <select
              id="category"
              name="categoryId"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
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
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Зураг
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image"
                name="image"
                type=""
                step="0.01"
                placeholder="Барааны зурагийг оруулна уу ..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="image-error"
                required
              />
              <ShoppingBagIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {state.errors?.image ? (
            <div
              id="name-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              {state.errors.image.map((error: string) => (
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
