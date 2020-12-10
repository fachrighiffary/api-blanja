# API Blanja App

### Rest api 

#### Dalam project ini saya membuat rest-api blanja app, yang mana disini saya menggunakan tekhnologi NodeJs, expressJS, dan MySQL untuk databasenya


untuk instalasi nodejs bisa langsung saja kunjungi link dibawah ini dan install
~~~
https://nodejs.org/en/
~~~

kemudian install express js
untuk cara menginstallnya cukup mudah yaa cukup dengan jalankan syntax dibawah ini di terminal kalian
~~~
untuk yang menggunakan npm
npm install express

untuk yang menggunakan yarn
yarn add express
~~~

untuk database bisa dengan mendownload Xampp 
~~~
https://www.apachefriends.org/download.html
~~~


untuk dokumentasi api pada postman bisa langsung kunjungi link dibawah ini 
~~~
https://web.postman.co/collections/12720107-834a1e4b-291a-48c3-a9e0-50002e9eea17?version=latest&workspace=25cdd334-0ec1-4cd0-8234-62613dc4b0d5
~~~


## Config database 
~~~
const db = mySQL.createConnection({
    host: your host,
    user: your user,
    password: your password,
    database: your database
})
~~~

## Documentasi Postman

## Register

endpoint 
~~~
localhost:8000/auth/register

body
{
    "username" : "Kevin",
    "password": "akuganteng",
    "level_id" : 1
}
~~~

response
~~~
{
    "status": 200,
    "data": {
        "msg": "Register Berhasil",
        "userData": {
            "username": "Kevin"
        }
    }
}
~~~

## Login

endpoint
~~~
localhost:8000/auth/login

body
{
    "username" : "Fachri",
    "password" : "akuganteng"
}
~~~

response
~~~
{
    "status": 200,
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZhY2hyaTAyIiwibGV2ZWwiOjIsImlhdCI6MTYwNzU3MzM5MH0.hLkkKxiW-j6hsHDGZ7I04BFJ1Wxdx5C5jJ-6MeX8eNs"
}
~~~


## Create Product

endpoint 
~~~
localhost:8000/products

header
x-access-token : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZhY2hyaSIsImxldmVsIjoxLCJpYXQiOjE2MDc1MjkzNzJ9.q5T2NRXMlldPXLZJk3P_1ujM2LbJMo1fhoJYfs-Q-aI

~~~

response
~~~
{
    "status": 200,
    "data": {
        "msg": "Input Successfully",
        "data": {
            "id": 79,
            "category_id": "5",
            "store_id": "1",
            "product_name": "Bigetron jersey",
            "product_price": "159000",
            "product_qty": "12",
            "product_rating": "4",
            "product_desc": "bahan lembut dan adem",
            "product_size": "M,L,XL",
            "product_color": "BLUE",
            "product_condition": "NEW",
            "product_img": "[\"/images/1607574466643-product_img.jpg \",\"/images/1607574466657-product_img.jpg \",\"/images/1607574466658-product_img.jpg \",\"/images/1607574466659-product_img.jpg \",\"/images/1607574466660-product_img.jpg \"]",
            "input_date": "2020-12-10T04:27:46.777Z",
            "update_date": "2020-12-10T04:27:46.777Z"
        }
    }
}
~~~

## Get product By id

~~~
endpoint

localhost:8000/product/78

header
x-access-token
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZhY2hyaSIsImxldmVsIjoxLCJpYXQiOjE2MDczNTE1OTh9.smm-QX_-1KhsWU8FENIWOmjqNE3LbhSdMuYePeEH22A
~~~

responcse
~~~
error
{
    "msg": "Please Login First",
    "status": 401
}


success
{
    "status": 200,
    "data": [
        {
            "id": 78,
            "category_id": 5,
            "product_name": "RRQ jersey",
            "category_name": "Shoes",
            "product_rating": 4,
            "product_color": "Blue",
            "product_condition": "New",
            "store_name": "zalora",
            "product_price": 250000,
            "product_qty": 2,
            "product_size": "M,L,Xl",
            "product_desc": "Bahan adem terbuat dari bahan parasit",
            "product_img": "[\"/images/1607575928823-product_img.jpg \",\"/images/1607575928826-product_img.jpg \",\"/images/1607575928827-product_img.jpg \",\"/images/1607575928827-product_img.jpg \",\"/images/1607575928828-product_img.jpg \"]"
        }
    ]
}
~~~

## Update Product

endpoint 
~~~
localhost:8000/product/
method put

header
x-access-token : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZhY2hyaSIsImxldmVsIjoxLCJpYXQiOjE2MDc0NTk5MDV9.SUvvDZhe_LCwpdKCXfyOguMkPBMVmZtReIIfjoIfbj8
~~~

response
~~~
error
{
    "msg": "Please Login First",
    "status": 401
}

success
{
    "msg": "Update Successfully",
    "data": {
        "updateBody": {
            "id": "78",
            "category_id": "5",
            "product_name": "RRQ jersey",
            "product_price": "250000",
            "product_qty": "2",
            "product_desc": "Bahan adem terbuat dari bahan parasit",
            "product_size": "M,L,Xl",
            "product_color": "Blue",
            "product_condition": "New",
            "product_img": "[\"/images/1607576058341-product_img.jpg \",\"/images/1607576058342-product_img.jpg \",\"/images/1607576058344-product_img.jpg \",\"/images/1607576058344-product_img.jpg \",\"/images/1607576058345-product_img.jpg \"]",
            "update_date": "2020-12-10T04:54:18.639Z"
        }
    }
}
~~~