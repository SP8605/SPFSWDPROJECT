## Routes & Endpoints

 
# /customers
POST: Create a new Customer
GET: Get all list of Customers


# /customers/{id}
GET: Get to a Customer by their ID
PUT: Update every Customer by Unique ID's
DELETE: Delete a Customer by ID {(check if the Customer has been issued with a service slot) && (check if the parts are available readily on stock)}


## /vehicle
GET: Get all Vehicles serviced 
POST: Create/Add a new service slot for every vehicle that is waiting

## /vehicle/{id}
GET: Get a Vehicle by its Chasis number as ID
PUT: Update every Vehicle's chasis and license plate number as its ID


# /Mechanics
GET: Get all vechicles with allocated Mechanics


# / mechanic/{id}
GET: Get every Mechanic by their ID
PUT: Update every Mechanic by a Unique ID