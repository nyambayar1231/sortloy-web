CREATE TABLE `products` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`code` text,
	`description` text,
	`price` integer NOT NULL,
	`categoryId` integer NOT NULL,
	`createdUserId` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`createdUserId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
