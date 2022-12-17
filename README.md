<h1>В папке backend </h1>

<h3>В терминале</h3>
<code>npm i</code>

<h1>База данных mysql</h1>


<h3>В файле .env надо указать путь к бд</h3>
<p>У вас есть open server ? Если есть создадите бд с помощью phpmyadmin</p>
<p> там в файле .env напишите <code>DATABASE_URL="mysql://Имя пользователя:Пароль@localhost:3306/здесь назв. бд"</code></p>


<br>
<h3>В терминале</h3>
<code>
npx prisma migrate dev
</code>
  
  <br>
  <br>
  
<code>
npx prisma db seed
</code>


<h1>Что-бы запустить Backend</h1>
<code>
npm run start:dev
</code>

<br>
<h1>
В папке frontend
</h1>
<code>npm i</code>

<h1>Что-бы запустить Frontend</h1>
<code>npm run serve</code>

