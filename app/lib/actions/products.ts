'use server';

import { auth } from '@/auth';
import { z } from 'zod';

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
  description: z.string(),
  code: z.string({
    required_error: 'Код заавал оруулна уу',
  }),
  price: z.string({
    required_error: 'Үнэ заавал оруулна уу',
  }),
  media: z.any(),
  categoryId: z.string({
    required_error: 'Ангилал заавал сонгоно уу',
  }),
});

const CreateProduct = FormSchema.omit({ id: true });

export async function createProduct(_: State, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    return {
      message: 'forbidden!',
    };
  }

  const validatedFields = CreateProduct.safeParse({
    name: formData.get('name'),
    code: formData.get('code'),
    description: formData.get('description'),
    price: formData.get('price'),
    media: formData.get('media'),
    categoryId: formData.get('categoryId'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Category.',
    };
  }

  const { name, code, description, price, media, categoryId } =
    validatedFields.data;

  console.log(media, categoryId);

  try {
    // await db.insert(categories).values({
    //   name,
    //   code,
    //   createdUserId: session.user.id,
    // });
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice',
    };
  }
  //   revalidatePath('/dashboard/categories');
  //   redirect('/dashboard/categories');
}
