export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "Ypk_test_0QHHK5qWl2fdobnqB7nTBuFK00W8nikOAk",
    s3: {
     REGION: "us-east-1",
     BUCKET: "my-notes-app"
    },
    apiGateway: {
     REGION: "us-east-1",
     URL: "https://vlg7n20px5.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
     REGION: "us-east-1",
     USER_POOL_ID: "us-east-1_4xc1y4oSn",
     APP_CLIENT_ID: "11dkkrkdn95mn45u278bkp3h94",
     IDENTITY_POOL_ID: "us-east-1:5eb2ddbe-e4c8-4f5e-a89e-7ccd203ccb77"
    }
   };