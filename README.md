# API Blanja App

### Rest api 
~~~
endpoint untuk menampilkan semua data
Dengan method Get
localhost:8000/products
~~~

~~~
endpoint untuk menampilkan data berdasarkan id
dengan Method Get
localhost:8000/product/{id}
~~~

~~~
endpoint untuk createProduct baru
dengan Method Post
localhost:8000/products
~~~

~~~
endpoint untuk Hapus Data
dengan Method delete
localhost:8000/product/:{id}
~~~

~~~
endpoint untk update data
dengan method put
localhost:8000/product/
~~~

~~~
endpoint untk searchname 
dengan method get
localhost:8000/search/name?q=nama barang yang ingin di cari
q disini adlah parameter keyword yang sudah di deklarasikan di model
~~~

~~~
endpoint untuk search category
dengan method get
localhost:8000/search/categoryk?= nama kategori yang ingin di cari
k disini adalah parameter keyword dari kategori yang di deklarasikan di route
~~~


~~~
endpoint untuk sort Name 
dengan method get
localhost:8000/search/sortName
~~~

~~~
endpoint untuk sort Price 
dengan method get
localhost:8000/search/sortPrice
~~~

~~~
endpoint untuk sort New 
dengan method get
localhost:8000/search/sortNew
~~~
