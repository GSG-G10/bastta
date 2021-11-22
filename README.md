# README : 

`Bastta.com` is a website that allows users to publish or buy second hand products from all categories. The website helps products' owners to find their best customers and contact directly with them.

## **The Problem** :no_entry_sign: :-
There is a big amount of products that are offered for sale but it is hard for the owner to find the best buyer for his product and there are alot of people that find it hard to look for a specific used product to buy and contact with the seller.

## **The solution** :bulb: :-
We founded this website to make an easy contact between second hand products' buyers and sellers. The website facilitates the way of publishing and buying used products for all users. For society terms validation, there are admins to accept or deny published products.

## **User Stories**  :books: 

### **User who want to buy or sell a product** :book: 
   #### As a user, I can : 
*  Browse all available products on the website.
*  Filter published products by it's category.
*  Filter products by it's location or price.
*  Search about a product by it's name.
*  Create an account to buy or sell products.
*  Publish my products to find a buyer.
*  Buy products by contacting the product's owner.
*  Delete and edit my products.
*  Add products to my favourites.
*  See favourite products in profile page.
*  See more details about the product.
*  See information about the website in about us page

### **User who is an admin** :1234: 
   #### As an admin, I can : 
* Access admin page and see all products filtered in the dashboard.
* See all users in the website.
* Accept or deny new published products.
* Delete products or users


## **User Journey**  :pencil2:

### **User who want to buy a product** :book:
* The user will see all categories of the products in the categories nav and filter presented products by it's category.
* The user can choose his suitable filter from the side bar by location or price
* By clicking on the product's card you will move to it's page for more information.
* User's products are listed in profile page with a button for delete and an icon to edit the product.
* There is a button in the product's card which allows user to start chating with the product's owner.

### **User who is an admin** :1234:
*    There is a table that presents all users and products. The admin can delete a product or a user when he press delete button and confirms his action

## **How to Launch App Locally** :-

*  clone this repo by typing this command in the terminal:  
`https://github.com/GSG-G10/bastta.git`

* Enter the folder `cd bastaa`

*  Run `npm i` to install the packages for the app in general.

*  Run `cd client` and `npm i` to install the packages for the client- ReactJs.

### Database Setup  :clipboard:


### **Environment variables:**
Environment variables are one of the ways we keep our products safe. If you want to access our app locally you will need to add your own.
- create `.env` file
- add your Environment variables
```shell=
DATABASE_URL= # Your production connect
```

### Start the App :electric_plug:

To start the App Locally you can start the server First then start client-side or vice versa!
> To run Server, In your terminal Type: 

    `npm run dev` then you should be able to go to (http://localhost:5000/) 
> To run client-side, In your terminal Type:

    `cd client` => `npm start` then you will be able to run (http://localhost:3000/) 

Now you can view the app live in the Browser!

## **Technologies** :computer: :-

- BackEnd: **Express Node JS**, 
- FrontEnd: **React JS**
- Database: **Postgresql**
- Styling: **React Bootstrap**, **SASS**
- Libraries: **Styled Component**

## **Team Members** :-

- **[Umar Salah](https://github.com/umarsalah)**
- **[Ahmed Omar](https://github.com/Ahmad-Omar)**
- **[Muath Al-Khatib](https://github.com/muathkhatib)**
- **[Mohammed Salah](https://github.com/mohammedsalah7)**
- **[Ahmad Sabbah](https://github.com/ahmadfarid-059)**
