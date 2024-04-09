import { unstable_noStore as noStore } from 'next/cache';
import { db } from '@/db';
import { SelectCategory, categories } from '@/db/schema/categories';
import { eq } from 'drizzle-orm';

export async function fetchFilteredCategories(
  query: string
): Promise<Array<SelectCategory>> {
  noStore();
  try {
    return await db.select().from(categories);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchCategoryById(id: number): Promise<SelectCategory> {
  try {
    const [category] = await db
      .select()
      .from(categories)
      .where(eq(categories.id, id));

    return category;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}
