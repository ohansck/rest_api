export const config = {
  "dev": {
    "username": process.env.POSTGRES_DEV_USERNAME,
    "password": process.env.POSTGRES_DEV_PASSWORD,
    "database": process.env.POSTGRES_DEV_DATABASE,
    "host": process.env.POSTGRES_DEV_HOST,
    // "username": "postgres",
    // "password": "Hades@1914",
    // "database": "udagram-kingsley-dev",
    // "host": "localhost",
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
