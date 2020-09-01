export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HLWguKAG5eloRI7yQRPOyQlKmdXXE2bab2nKHZlP3A6uaEH4G8atVvRlelD2q5DPRHEQxSaZNG755wjnbACut1c00jNldGLHD",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-uploads-jcanoc"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://8lykgq0ha1.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_o3YFBcjel",
        APP_CLIENT_ID: "jkv0kb38aukr6l9nl2mc76588",
        IDENTITY_POOL_ID: "us-east-1:553da606-8096-457b-94b9-696506bdbd62"
    }
};