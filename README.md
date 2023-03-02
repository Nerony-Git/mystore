# MyStore (Angular Project)   

**UDACITY - ALX Full-Stack Developer Nanodegree program.**  
**Project 3️⃣**

## Overview  

This project is an e-commerce website – an application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process..

## ⏬ Installation  

> **_Clone repository_**  
>> Navigate to the directory you want to install the project, open command prompt from the directory and type the code below to clone this repository.  
>>  
>>```sh
>> git clone https://github.com/Nerony-Git/mystore.git
>>```  
>  
> **_Open directory the project was cloned to_**  
>> Navigate to the directory using the code below:  
>>  
>>```sh
>> cd mystore
>>```  
>  
> **_Install Dependecies_**  
>> the code below will install all package dependencies needed to run this project  
>>  
>> ```sh
>>  npm install
>> ```  
>

## 🌏 Dataset

> **_Dataset_**  
>> The dataset used in this project is a remote data source from Udacity which is stored as a json file *data.json*. 
>> 
> 
> **_Data Source_**  
>>  https://raw.githubusercontent.com/udacity/nd-0067-c3-angular-fundamentals-project-starter/main/src/assets/data.json
>> 
>  
> **_Sample of how data is stored in the data.json file_**  
>> 
>> ```sh
>>  [
>>    {  
>>      "id": 1,  
>>      "name": "Book",  
>>      "price": 9.99,  
>>      "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",  
>>      "description": "You can read it!"  
>>     },  
>>    {  
>>      "id": 2,  
>>      "name": "Headphones",  
>>      "price": 9.99,  
>>      "url": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",  
>>      "description": "Listen to music!"  
>>     }  
>>  ]
>> ```  
>> 
> 

## 🔑 Endpoint, Parameters & Port

> **_Port_**
>> The server listens on port **3000**.
>>
>> http://localhost:3000
>>  
>
> **_Parameters_**
>> To view details of a particular product, the application will reuire the id of the product. ie. the parameter passed is the id of the product. 
>>  
>  
> **_API Endpoint_**
>>  "/" routes to the main page. 
>>  
>>```sh
>> http://localhost:3000/
>>``` 
>>  
>>  
>>  "/product/:id" routes to the product details page using the id as a parameter. 
>>  
>>```sh
>> http://localhost:3000/products/1
>>``` 
>>  
>>  
>>  "/cart" routes to the cart page. 
>>  
>>```sh
>> http://localhost:3000/cart
>>``` 
>>   
>>  
>>  "/order" routes to the order details page after checkout. 
>>  
>>```sh
>> http://localhost:3000/order
>>``` 
>>   
>>  
>>  "/faqs" routes to the frequently asked questions page. 
>>  
>>```sh
>> http://localhost:3000/faqs
>>``` 
>>   
>>  
>>  "/about" routes to the about us page. 
>>  
>>```sh
>> http://localhost:3000/about
>>``` 
>>   
>>  
>>  "/tncs" routes to the terms and conditions page. 
>>  
>>```sh
>> http://localhost:3000/tncs
>>``` 
>>   
>>  
>>  "**" re-routes a user to the main page if any other endpoint aside the ones specified above is visited. 
>>  
>>  
>  


## 📝 Scripts
> **_Run Server_**
>> To start the server, type the code below in the terminal.
>>
>>```sh
>> npm run start
>>```  
>  
> **_Prettier_**
>> To format the code use the code below.
>>
>>```sh
>> npm run prettier
>>```  
>  
> **_Lint_**
>> To check for errors in the code and confirm the style of the code is consistent, type the code below in the terminal.
>>
>>```sh
>> npm run lint
>>```  
>  
> **_Test_**
>> To execute the unit tests via [Karma](https://karma-runner.github.io), type the code below in the terminal. 
>>
>>```sh
>> npm run test
>>```  
>  
> **_Build Only_**
>> To build the project, type the code below in the terminal. The build artifacts will be stored in the `dist/` directory.
>>
>>```sh
>> npm run build
>>```  
>  