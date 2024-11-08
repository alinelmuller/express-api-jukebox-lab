# Reactville Jukebox API

This project is the backend for the Reactville Jukebox, a collaborative music application where users can add, update, retrieve, and delete music tracks. Built with Node.js, Express, and MongoDB, this API supports full CRUD operations to manage tracks in the jukebox.

## Technical Stack

- **Node.js & Express**: Backend server and route handling
- **MongoDB & Mongoose**: Database and ORM for data modeling
- **Middleware**:
  - **CORS**: Allows cross-origin requests from the React frontend
  - **Method Override**: Enables HTTP verbs like PUT and DELETE
  - **express.json()**: Parses incoming requests with JSON payloads

## Endpoints

### 1. Add a New Track
- **Endpoint**: `POST /tracks`
- **Function**: Adds a new track to the database.
- **Success Status Code**: `201 Created`
- **Error Status Code**: `500 Internal Server Error`
- **Request Body**:
  ```json
  {
    "title": "Track Title",
    "artist": "Artist Name"
  }

Alternatively, you can send multiple tracks in one request:

```json
[
  {
    "title": "Stairway to Heaven",
    "artist": "Led Zeppelin"
  },
  {
    "title": "Hotel California",
    "artist": "Eagles"
  },
  {
    "title": "Imagine",
    "artist": "John Lennon"
  },
  {
    "title": "Billie Jean",
    "artist": "Michael Jackson"
  },
  {
    "title": "Smells Like Teen Spirit",
    "artist": "Nirvana"
  },
  {
    "title": "Sweet Child o' Mine",
    "artist": "Guns N' Roses"
  },
  {
    "title": "Like a Rolling Stone",
    "artist": "Bob Dylan"
  },
  {
    "title": "Purple Haze",
    "artist": "Jimi Hendrix"
  }
]

### 2. Get All Tracks
- **Endpoint**: `GET /tracks`
- **Function**: Retrieves a list of all tracks.
- **Response**: An array of track objects.
- **Success Status Code**: `200 OK`
- **Error Status Code**: `500 Internal Server Error`

### 3. Get a Single Track
- **Endpoint**: `GET /tracks/:id`
- **Function**: Retrieves details of a specific track using its ID.
- **Response**: A single track object.
- **Success Status Code**: `200 OK`
- **Error Status Code**: `500 Internal Server Error`

### 4. Update a Track
- **Endpoint**: `PUT /tracks/:id`
- **Function**: Updates an existing track.
- **Success Status Code**: `200 OK`
- **Error Status Code**: `500 Internal Server Error`
- **Request Body**:
  ```json
  {
    "title": "New Track Title",
    "artist": "New Artist Name"
  }
  
### 5. Delete a Track
- **Endpoint**: `DELETE /tracks/:id`
- **Function**: Deletes a track from the database.
- **Response**: The deleted track's details.
- **Success Status Code**: `200 OK`
- **Error Status Code**: `500 Internal Server Error`

## Error Handling
Each endpoint includes error handling to catch and manage issues like missing data or server errors, ensuring a reliable API experience.

## Usage
To test these endpoints, use a tool like Postman or Thunder Client.

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Start the server with `npm start`.
4. Use the endpoints to add, retrieve, update, or delete tracks.

## Environment Variables
Ensure you have a `.env` file with the following variable: MONGODB_URI=<Your MongoDB URI>
