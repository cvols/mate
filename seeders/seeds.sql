-- customers seeds --
insert into customers (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)

values ('chris', 'volonnino', 'cvols', 'password', 'chris.volonnino@gmail.com', '9083478101', '1140 garden street', 'hoboken', 'nj', 07030, '5.0', false,CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)

-- vendors seeds --
insert into vendors (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)
values ('james', 'castanien', 'jcast', 'password', 'jcastanient@gmail.com', '1234567891', '1 go to lane', 'morristown', 'nj', 12345, '1.3', false, current_timestamp, current_timestamp);

values ('chris', 'volonnino', 'cvols', 'password', 'chris.volonnino@gmail.com', '9083478101', '1140 garden street', 'hoboken', 'nj', 07030, 5.0, false, current_timestamp, current_timestamp);
insert into customers (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)
values ('sara', 'smith', 'cvols', 'password', 'cno@gmail.com', '9083478101', '1140 garden street', 'hoboken', 'nj', 07030, '5.0', false, current_timestamp, current_timestamp);
insert into customers (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)
values ('kate', 'doe', 'cvols', 'password', 'chrnino@gmail.com', '9083478101', '1140 garden street', 'hoboken', 'nj', 07030, '5.0', false, current_timestamp, current_timestamp);
insert into customers (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)
values ('michele', 'smith', 'cvols', 'password', 'connino@gmail.com', '9083478101', '1140 garden street', 'hoboken', 'nj', 07030, '5.0', false, current_timestamp, current_timestamp);
insert into customers (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)
values ('christine', 'bell', 'cvols', 'password', 'lonnino@gmail.com', '9083478101', '1140 garden street', 'hoboken', 'nj', 07030, '5.0', false, current_timestamp, current_timestamp);
-- vendors seeds --
insert into vendors (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)
values ('jason', 'doe', 'jcast', 'password', 'jcast@gmail.com', '1234567891', '123 abc ave', 'morristown', 'nj', 12345, '1.3', false, current_timestamp, current_timestamp);
insert into vendors (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)
values ('james', 'castanien', 'nient', 'password', 'nient@gmail.com', '1234567891', '456 jon blvd', 'new port', 'nj', 12345, '5.0', false, current_timestamp, current_timestamp);
insert into vendors (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)
values ('chris', 'frank', 'stient', 'password', 'stient@gmail.com', '1234567891', '321 tree lane', 'williamsburg', 'nj', 12345, '4.8', false, current_timestamp, current_timestamp);
insert into vendors (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)
values ('aaron', 'sanders', 'jason', 'password', 'jason@gmail.com', '1234567891', '1 go to lane', 'new york', 'nj', 12345, '3.2', false, current_timestamp, current_timestamp);
insert into vendors (first_name, last_name, username, password, email, phone_number, street_address, city, state, zip_code, user_rating, transaction, createdAt, updatedAt)
values ('luke', 'smith', 'joe', 'password', 'joe@gmail.com', '1234567891', '12 market place', 'lakeshore', 'nj', 12345, '1.0', false, current_timestamp, current_timestamp);

-- transactions seeds --
insert into transactions (desired_currency, total_money, current_currency, transaction_location, exchange_rate, fees, total_charges, transaction, createdAt, updatedAt, customerID)
values ('USD', 500, 'Euros', 'Newark Liberty International Airport', 3.5, 10, 510, false, current_timestamp, current_timestamp, 1);
insert into transactions (desired_currency, total_money, current_currency, transaction_location, exchange_rate, fees, total_charges, transaction, createdAt, updatedAt, customerID)
values ('USD', 200, 'Euros', 'Newark Liberty International Airport', 3.5, 10, 510, false, current_timestamp, current_timestamp, 1);
insert into transactions (desired_currency, total_money, current_currency, transaction_location, exchange_rate, fees, total_charges, transaction, createdAt, updatedAt, customerID)
values ('USD', 700, 'Euros', 'Newark Liberty International Airport', 3.5, 10, 510, false, current_timestamp, current_timestamp, 3);
insert into transactions (desired_currency, total_money, current_currency, transaction_location, exchange_rate, fees, total_charges, transaction, createdAt, updatedAt, customerID)
values ('USD', 100, 'Euros', 'JFK International Airport', 3.5, 10, 510, false, current_timestamp, current_timestamp, 3);
insert into transactions (desired_currency, total_money, current_currency, transaction_location, exchange_rate, fees, total_charges, transaction, createdAt, updatedAt, customerID)
values ('USD', 500, 'Euros', 'JFK International Airport', 3.5, 10, 510, false, current_timestamp, current_timestamp, 2);