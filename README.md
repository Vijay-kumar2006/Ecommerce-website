By the end of this milestone, users will be able to cancel their placed orders from the My Orders page.

Steps to Implement
Add a "Cancel Order" button for each order on the My Orders page.
If the order is already canceled, do not display the button.
Create an endpoint that receives the order ID.
Retrieve the order using this ID, update its status to "Canceled," and save the changes.
Ensure the frontend updates accordingly after a successful cancellation.
Expected Outcome
Users can cancel their orders, and canceled orders will no longer display the cancel button.







