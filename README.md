# Bitespeed Identity Reconciliation

This project implements a backend service using the MERN (MongoDB, Express.js, React.js, Node.js) stack to handle identity reconciliation for Bitespeed across multiple purchases. The service exposes an `/identify` endpoint to consolidate customer identity information.

## Features

- Allows identifying customers based on email or phone number.
- Consolidates contact information of primary and secondary contacts.
- Handles creation of secondary contacts when new information is provided.

## Getting Started

### Prerequisites

- Node.js
- MongoDB (or any other SQL database)
- React

### Installation


Checking the Endpoint using Postman:
### Open Postman: If you don't have Postman installed, you can download it from postman.com.

Create a New Request:

### Open Postman and click on the "New" button to create a new request.
Choose the appropriate HTTP method (e.g., POST).
Enter the URL of your /identify endpoint (e.g., http://localhost:5000/identify).
### Set Request Body:

Select the "Body" tab.
Choose "raw" as the input type.
Set the body to JSON format.
#### Enter the request payload as JSON, for example:
json
Copy code
{
  "email": "customer@example.com",
  "phoneNumber": "1234567890"
}
Send the Request:

#### Click on the "Send" button to send the request to the server.
You should receive a response from the server, indicating the primary contact ID, emails, phone numbers, and secondary contact IDs.
Running the Guide Step by Step using Postman:
Check the /identify Endpoint:

### Follow the steps mentioned above to check the /identify endpoint using Postman.
Ensure Proper Request Payload:

#### Make sure your request payload is in JSON format and includes either the email or phoneNumber, or both.
## Send the Request:

Once you've set up the request payload, click on the "Send" button to send the request to the server.
## Verify Response:

Check the response returned by the server to ensure it includes the correct primary contact ID, emails, phone numbers, and secondary contact IDs.
### Repeat for Different Scenarios:

You can repeat the process by changing the request payload to test different scenarios, such as providing new information for an existing contact or identifying a completely new customer.
