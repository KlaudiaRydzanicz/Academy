# Secure ERP

## Story

You are working at an enterprise solution company.
A new client approaches you for
an [ERP](https://en.wikipedia.org/wiki/Enterprise_resource_planning)
software they need for the administration of
their daily operations. Naturally, you have multiple
complex solutions for this job.

The problem is that the client is _extremely_ suspicious
about cloud technologies and the web in general.
They say that what is on the net, or just on a computer
that is connected to the Internet, is already compromised,
and at least four countries' secret services come and go
there regularly.


As the client wouldn't provide any real data, only the
general structure, you had to create some dummy data
for the development.

## What are you going to learn?

- collaborate with your team
- reactive forms
- form validation
- routing architectures
- routing access based on user role


## Tasks

1. Implement the CRM module with basic and special operations.
    - Once the CRM module is selected, choosing button `new customer` will ask the user to type the name, email and subscribed status for a new customer. After the last field is introduced a new customer is introduced with an random id.
    - Once the CRM module is selected, choosing option `customers` will print all the customers.
    - Once the CRM module is selected, choosing option `update` from the customers list open modal to enter new values for the name, email and subscribe status. Once the submit button is clicked, the customer fields are updated with the given values.
    - Once the CRM module is selected, choosing option `delete` from the customer list delete it from the database.
    - When user click `emails` button then the modal with all emails of subscribed customers appears.

2. Implement the Sales module with basic and special operations.
    - Provide basic CRUD operations.
    - By choosing `revenue` button, modal with the transaction that made the biggest revenue appears.
    - By choosing `revenue` button, modal with the product that made the biggest revenue appears.
    - `count between` option counts number of transactions between two given dates, and show it in a toast.
    - `sum between` option sums the price of transactions between two given dates.

3. Implement the HR module with basic and special operations.
    - Provide basic CRUD operations.
    - `oldest`, `youngest` buttons return the names of the oldest and the youngest employees.
    - `average age` button returns the average age of employees.
    - `next birthdays` button returns the names of employees having birthdays within the two weeks starting from the given date, and display it in a toast.
    - `count with clearance` button returns the number of employees with at least the given clearance level.
    - `count per department` button returns the number of employees per department..

## General requirements

- You mustn't use any external libraries except for those already in the project (ngx-bootstrap, json-server).
- Use provided json data, and run json server with `json-server --watch server/erp.json` to work with fixed backend. Implement authentication logistics with firebase, create roles: - `Superuser `- has access to every module - `CRM employee` - has access to CRM module - `Sales employee` - has access to Sales module - `HR employee` - has access to HR module - `Default user `- has no access to any module - should be redirected to `register/login` page

## Hints

- This project contains many similar requirements, try to unite
  as many common parts as possible!
- Do not spend much time on input checking. This time it is not
  a problem if a badly formatted data breaks your code.

Sales structure:
- id (string)
- customer id (string)
- product (string)
- price (number)
- transaction date (string): in ISO 8601 format (like 1989-03-21)
 
Customer structure:
- id (string)
- name (string)
- email (string)
- subscribed (boolean) - Is subscribed to the newsletter ? true : false
      
Human resources structure:
- id (string)
- name (string)
- birth date (string): in ISO 8601 format (like 1989-03-21)
- department (string)
- clearance level (int): from 0 (lowest) to 7 (highest)


## Background materials

- <i class="far fa-exclamation"></i> [Role-Based Routing Access with Angular Guard](https://medium.com/echohub/angular-role-based-routing-access-with-angular-guard-dbecaf6cd685)
- <i class="far fa-exclamation"></i>  [JSON Server](https://github.com/typicode/json-server)

