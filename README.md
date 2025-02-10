

Overview

This project builds a secure Sign-Up Page where users can create an account by entering their name, email, and password. To protect user data, we implement password encryption before storing credentials in the database.

Why Password Encryption is Important

 Protect User Data

If hackers access the database, encrypted passwords remain safe.

Plain text passwords expose users to identity theft and data breaches.

 Privacy & Security

Ensures that user passwords aren’t visible to anyone, including developers or administrators.

Prevents unauthorized access in case of a data leak.

 Regulatory Compliance

Meets security standards like GDPR (General Data Protection Regulation) and PCI-DSS (Payment Card Industry Data Security Standard).

Secure password storage is a best practice for handling user credentials.

 Stops Password Theft

Even if attackers steal hashed passwords, they can’t easily reverse them.

Unlike simple encryption, hashing with additional security measures (like salting) ensures strong protection.

Features of this Project

 User Registration – Allows users to sign up with their name, email, and password.

 Password Hashing with bcrypt – Encrypts passwords before saving them in the database.

 Secure Data Storage – Stores user details while keeping passwords encrypted.

 Validation Checks – Ensures email format and password strength before submission.

 For Milestone 6: Password Encryption & Secure Storage
 
 Step 1: Encrypt the Password
 
Use bcrypt to hash the user’s password during signup.
Generate a unique salt and hash the password for extra security.
Store the hashed password instead of plain text in the database.

 Step 2: Store User Data Securely
 
Save all user details (name, email, hashed password) in the database.
Ensure that passwords never get stored in plain text.
Retrieve only necessary user data during login while verifying encrypted passwords.


 User signs up → Enters name, email, and password.
 
 Password is hashed using bcrypt before being saved.
 
 Database stores encrypted passwords securely.
 
 Login authentication checks hashed passwords without revealing them.

Why bcrypt for Password Hashing?

 One-Way Encryption – Hashed passwords can’t be reversed into plain text.

 Automatic Salting – Adds random data to prevent rainbow table attacks.

Adjustable Security – Work factor can be increased to strengthen encryption over time.

Conclusion

This project enhances security by encrypting user passwords before storing them, ensuring that user credentials remain safe even in the case of a database breach.



