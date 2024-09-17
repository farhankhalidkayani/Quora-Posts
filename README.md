


# Quora-Posts Clone

This project is a simple Quora-like clone built with **Node.js**, **Express**, and **EJS**. Users can create, edit, view, and delete posts, with the data stored temporarily in memory (for now). This project demonstrates the use of **CRUD** (Create, Read, Update, Delete) operations and **RESTful routes** with a focus on backend development.

## Features

- View all posts
- View a single post in detail
- Add a new post
- Edit an existing post
- Delete a post
- Uses **EJS** templates for server-side rendering
- Basic error handling (404 page for non-existing routes)
- Clean and simple UI with responsive design

## Tech Stack

- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **EJS**: Templating engine
- **HTML5 & CSS3**: Frontend structure and styling
- **Method-Override**: For supporting HTTP methods like PUT and DELETE in forms
- **JavaScript (ES6)**: Backend logic

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/quora-posts-clone.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd quora-posts-clone
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the server**:
   ```bash
   node app.js
   ```

5. **Open your browser** and navigate to:
   ```
   http://localhost:3000/posts
   ```

### Folder Structure

```
.
├── public              # Static assets (CSS, images, etc.)
│   └── style.css       # Custom styles for the app
├── views               # EJS templates
│   ├── index.ejs       # Home page (lists all posts)
│   ├── form.ejs        # Form for creating a new post
│   ├── post.ejs        # Post detail page
│   ├── edit.ejs        # Edit post form
│   └── 404.ejs         # 404 error page
├── app.js              # Main application file
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Routes

| Method | Route              | Description                  |
|--------|--------------------|------------------------------|
| GET    | `/posts`           | View all posts                |
| GET    | `/posts/new`       | Form to create a new post     |
| GET    | `/posts/:id`       | View a single post            |
| GET    | `/posts/:id/edit`  | Form to edit a post           |
| POST   | `/posts`           | Create a new post             |
| PATCH  | `/posts/:id`       | Update an existing post       |
| DELETE | `/posts/:id`       | Delete a post                 |

## Screenshots

### Home Page (All Posts)
![Home Page](./screenshots/home.png)

### Post Details
![Post Details](./screenshots/post-details.png)

### Add New Post
![Add Post](./screenshots/add-post.png)

## Future Improvements

- Connect to a database (e.g., MongoDB) for persistent storage
- Add user authentication for secured access to post actions
- Implement user-specific features like upvoting and commenting

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
