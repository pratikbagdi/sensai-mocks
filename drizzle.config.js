/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_Z6Td2OwmLUyM@ep-wispy-scene-a5fq2rv4-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };