'use server';

import { z } from 'zod';
import { db } from '@/db';
import { categories } from '@/db/schema/categories';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { eq } from 'drizzle-orm';

export type State = {
  errors?: {
    name?: string[];
    code?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  name: z.string({
    required_error: 'Нэр заавал оруулна уу',
  }),
  code: z.string({
    required_error: 'Код заавал оруулна уу',
  }),
  date: z.string(),
});

const CreateCategory = FormSchema.omit({ id: true, date: true });

export async function createInvoice(_: State, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    return {
      message: 'forbidden!',
    };
  }

  const validatedFields = CreateCategory.safeParse({
    name: formData.get('name'),
    code: formData.get('code'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Category.',
    };
  }

  const { name, code } = validatedFields.data;

  try {
    await db.insert(categories).values({
      name,
      code,
      createdUserId: session.user.id,
    });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice',
    };
  }
  revalidatePath('/dashboard/categories');
  redirect('/dashboard/categories');
}

export async function updateCategory(id: number, _: State, formData: FormData) {
  const validatedFields = CreateCategory.safeParse({
    name: formData.get('name'),
    code: formData.get('code'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Category.',
    };
  }

  const { name, code } = validatedFields.data;

  try {
    await db
      .update(categories)
      .set({
        name,
        code,
      })
      .where(eq(categories.id, id));
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice',
    };
  }

  revalidatePath('/dashboard/categories');
  redirect('/dashboard/categories');
}

export async function deleteCategories(id: number) {
  try {
    await db.delete(categories).where(eq(categories.id, id));
    revalidatePath('/dashboard/categories');
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice',
    };
  }
}
