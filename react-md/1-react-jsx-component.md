# Giriş Seviyesi Ön Bilgiler

* ```JSX```, JavaScript için bir syntax uzantısıdır. JSX, React elementleri üretir. Mesela aşağıdaki tanım bir string ya da HTML değildir. Kısacası React yazarken kullanacağınız syntaxtır.

* ```React Component (React Bileşeni)``` Componentler, uygulamanızı tekrar kullanılabilir parçalara ayırmanıza ve her bir parçayı ayrı ayrı düşünmenize izin verir. Bu bir buton, bir form, bir diyalog, bir ekran vb. gibi olabilir. 2 tür component vardır. Bunlar fonksiyon component ve class componenttır. Class Component kullanmak daha mantıklıdır.  Çünkü daha çok avantaj sağlar.

* ```Props``` JSX attributelerini tek bir obje olarak bir componente aktarılmasını sağlayan objeye props denilmektedir. Mesela o componente isim ve soyisim değişkenlerini parametre olarak aktarırsak bu parametreleri componentin içinde props.isim , props.soyisim şeklinde erişebiliriz

* ```State``` State yalnızca classlar için kullanılabilen bir özelliktir. State bu classın global değişkeni olarak düşünülebilir..

# React - JSX - Component


#### Kurulumdan sonra vsc terminal ekranına proje oluşturmak için 
```create-react-app projeAdi```

---

#### Proje oluşturulduktan sonra projenin içine girmek için
```cd projeAdi```

---

#### Projeyi görüntülemek için localhost açma
```npm run start```

---

#### Projeyi durdurmak için
``` ctrl+c```

---

#### Chrome React eklentisi
* Google Chrome için "React Dev Tools" eklentisi

---

#### Visual Studio Code için kurulacak eklentiler

* ES7 React/Redux/GraphQL/React-Native snippets
* Live Server

---

#### Önemli dosyalar
*  <b>package.json :</b> paketleri ve çeşitli anahtar kelimeleri barındırır
* <b>public > index.html</b> : id'si "root" olan div'in içine componentleri ekliyoruz
* <b>src > index.js : </b>
* <b>src > App.js :</b> 

---

#### İlk Çalıştırma

> src > App.js 

```js
import  React, { Component } from  'react';
import  './App.css';

class  App  extends  Component {
render() {
return (

<div  className="App">
<h1>Başlık</h1>
</div>
);
}
}
export  default  App;

```

---

#### JSX formatı

* <b>App.js</b> içinde sadece tek parent element döner.
* Onun dışında tanımlı herhangi element döndürülürse hata alırız.
* <b>class=""</b> kullanımı yanlış
* <b>className=""</b> olarak kullanılır
* <b>label'da for="" </b>kullanımı yanlış
* <b>htmlFor=""</b> kullanımı doğru

---

#### Javascript'i JSX formatında kullanma

> src > App.js

```js
import  React, { Component } from  'react';
import  './App.css';
class  App  extends  Component {
render() {
const  test=34;
const  isAuth  =  true;
return (

<div  className="App">
<h4>{1+1}</h4>
<h4>{"murat".toUpperCase()}</h4>
<h4>{test}</h4>

<div>
{
isAuth ? <p>Kullanıcı Kayıtlı</p>
: <p>Kullanıcı Kayıtlı Değildir</p>
}
</div>
</div>
);
}
}
export  default  App;

```

---

#### İlk Component Oluşturma
* src'nin içinde yeni klasör oluşturuyoruz
* içine .js uzantılı component dosyası oluşturuyoruz 
---


> src > App.js

```js
import  React, { Component } from  'react';
import  User  from  "./components/User"  // Kullanılacak componenti import ediyoruz

import  './App.css';
class  App  extends  Component {
render() {
return (
<div  className="App">

<h4>App Component</h4>
<User/>

</div>
);
}
}
export  default  App;
``` 

> src > components > User.js  ( component için oluşturulan klasörün içindeki dosya )

```js
import  React, { Component } from  'react'

class  User  extends  Component {
render() {
return (
<div>

<form>
<input  type="text"></input>
<button>Gönder</button>
</form>

</div>
)
}
}
export  default  User;
```

---



#### React - Css - Bootstrap

* cdn linklerini <b>public > index.html</b>'e ekliyoruz.

> src > App.js

```js
import  React, { Component } from  'react';
import  './App.css';

class  App  extends  Component {
render() {
return (
<div>

<h4  style={{color:"blue"}}>Style 1</h4>
<h4  className="header container lead">Style 2</h4>

</div>
);
}
}
export  default  App;
```

---


#### Functional Components

* sadece props yollanacaksa functional component kullanmak daha doğru
* props + state olunca class component kullanılır
---

* components'in altına Navbar.js oluşturuyoruz.

> Navbar.js

```js
import  React  from  "react";

function  Navbar(){
return (

<div>
<h3>User App</h3>
</div>

)
}
export  default  Navbar;
```

>App.js

```js
import  React, { Component } from  'react';
import  Navbar  from  "./components/Navbar";
import  './App.css';

class  App  extends  Component {

render() {
return (
<div  className="container">

<Navbar/>

</div>
);
}
}
export  default  App;
```

#### Kısayol ile Component Oluşturma

* rcc+tab - class component
* rfc+tab - functional component


###### 1-2










