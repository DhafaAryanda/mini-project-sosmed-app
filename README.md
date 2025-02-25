## ✨ Fitur Utama

<table>
  <thead>
    <tr>
      <th>Module</th>
      <th>Feature</th>
      <th>Description</th>
      <th>Point</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <!-- Authentication -->
    <tr>
      <td rowspan="4">Authentication</td>
      <td>Register</td>
      <td>
      <ol>
      <li>Buat routing di <code>/register</code></li>
      <li>Sesuaikan form register mengikuti payload yang tersedia di endpoint <code>/api/register</code></li>
      </ol>
      </td>
      <td>5</td>
      <td>
        <input type="checkbox"  />
      </td>
    </tr>
    <tr>
      <td>Login</td>
      <td>
      <ol>
      <li>Buat routing di <code>/login</code></li>
      <li>Token yang berhasil di generate after login, disimpan ke cookies</li>
      <li>Implementasi <code>middleware</code>, apabila ada token dan valid, user bisa mengakses routing index <code>/</code></li>
      <li>Apabila sebaliknya, user hanya bisa mengakses routing <code>/</code> & <code>/register</code></li>
      </ol>
      </td>
      <td>5</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <tr>
      <td>Logout</td>
      <td>
      <ol>
      <li>Cukup create function untuk logout, proses logout dapat menggunakan endpoint <code>POST /logout</code></li>
      <li>Apabila response dari endpointnya success, jangan lupa remove cookiesnya di browser</li>
      </ol>
      </td>
      <td>8</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <tr>
      <td>Get Profile</td>
      <td>
      <ol>
      <li>Buat routing di <code>/profile</code></li>
      <li>Untuk mendapatkan data user, bisa menggunakan endpoint <code>GET /me</code></li>
      </ol>
      </td>
      <td>5</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <!-- Posts -->
    <tr>
      <td rowspan="4">Posts</td>
      <td>Display All Posts</td>
      <td>
      <ol>
      <li>Semua Posts bisa ditampilkan di routing <code>/</code></li>
      <li>Untuk menampilkan semua Posts cukup mainkan query paramnya <code>GET /api/posts?type=all</code></li>
      </ol>
      </td>
      <td>6</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <tr>
      <td>Display Self Posts</td>
      <td>
      <ol>
      <li>Untuk Posts milik sendiri <code>GET /api/posts?type=me</code></li>
      </ol>
      </td>
      <td>6</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <tr>
      <td>Updating Self Posts</td>
      <td>
      <ol>
      <li>Untuk update Posts milik sendiri <code>PATCH /api/post/update/:post_id</code></li>
      </ol>
      </td>
      <td>8</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <tr>
      <td>Deleting Self Posts</td>
      <td>
      <ol>
      <li>Untuk delete Posts milik sendiri <code>DELETE /api/post/delete/:post_id</code></li>
      </ol>
      </td>
      <td>6</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <!-- Reply -->
    <tr>
      <td rowspan="4">Reply</td>
      <td>Display Replies Count</td>
      <td>
      <ol>
      <li>Response dari endpoint ini <code>GET /api/posts</code> terdapat field yang menampilkan jumlah replies</li>
      </ol>
      </td>
      <td>6</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <tr>
      <td>Display List Reply by Post</td>
      <td>
      <ol>
      <li>Bisa menggunakan endpoint <code>GET /api/replies/post/:post_id</code></li>
      </ol>
      </td>
      <td>6</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <tr>
      <td>Reply by Post</td>
      <td>
      <ol>
      <li>Bisa menggunakan endpoint <code>POST /api/replies/post/:post_id</code></li>
      </ol>
      </td>
      <td>8</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <tr>
      <td>Deleting self Reply</td>
      <td>
      <ol>
      <li>Untuk menghapus reply milik sendiri <code>DELETE /api/replies/delete/:reply_id</code></li>
      </ol>
      </td>
      <td>6</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <!-- Like -->
    <tr>
      <td rowspan="3">Like</td>
      <td>Display Likes Count</td>
      <td>
      <ol>
      <li>Response dari endpoint ini <code>GET /api/posts</code> terdapat field yang menampilkan jumlah likes</li>
      </ol>
      </td>
      <td>6</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <tr>
      <td>Likes Post</td>
      <td>
      <ol>
      <li>Bisa menggunakan endpoint <code>POST /api/likes/post/:post_id</code></li>
      </ol>
      </td>
      <td>7</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <tr>
      <td>Unlikes Post</td>
      <td>
      <ol>
      <li>Bisa menggunakan endpoint <code>POST /api/unlikes/post/:post_id</code></li>
      </ol>
      </td>
      <td>7</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
    <!-- Notification -->
    <tr>
      <td>Notification</td>
      <td>Display List Notifications</td>
      <td>
      <ol>
      <li>Buat routing di <code>/notification</code> </li>
      <li>Bisa menggunakan endpoint <code>GET /api/notifications</code></li>
      </ol>
      </td>
      <td>6</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  </tbody>
</table>

## Docs Service API 📖

- Docs Swagger untuk API ➡️ <a href="https://drive.google.com/file/d/1q_A2t1dG2a9lV8McPCnMrXqfg9cWKuQ5/view?usp=sharing" target="_blank">Download Collection Postman</a>

## 📥 Instalasi dan Menjalankan Proyek

1. **Clone repository ini**

   ```sh
   git clone https://github.com/username/repo-name.git
   cd repo-name
   ```

2. **Install dependencies**

   ```sh
   npm install
   # atau
   yarn install
   ```

3. **Jalankan proyek**
   ```sh
   npm run dev
   ```
