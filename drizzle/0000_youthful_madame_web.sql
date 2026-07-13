CREATE TABLE "soaps" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"picture" text NOT NULL,
	"description" text,
	"status" text DEFAULT 'active' NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"deleted_at" timestamp with time zone
);
