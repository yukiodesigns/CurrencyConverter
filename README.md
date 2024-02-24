# Currency Converter

Currency Converter is a web application that allows users to convert currencies using real-time exchange rates. The project consists of a Django backend for handling currency conversion logic and a Next.js frontend for providing a user-friendly interface.

## Features

- Convert currencies from one to another based on real-time exchange rates.
- View a list of available currencies.
- Simple and intuitive user interface.

## Technologies Used

- Django: Python-based web framework used for the backend logic.
- Next.js: React-based framework used for building the frontend.
- REST Framework: Django extension for building RESTful APIs.
- Axios: HTTP client library for making API requests.
- Tailwind CSS: Utility-first CSS framework for styling the frontend.

## Setup Instructions

### Backend Setup

1. Clone the repository:

    ```
    git clone <repository-url>
    ```

2. Navigate to the backend directory:

    ```
    cd backend
    ```

3. Create a virtual environment:

    ```
    python -m venv venv
    ```

4. Activate the virtual environment:

    - On Windows:

        ```
        venv\Scripts\activate
        ```

    - On macOS and Linux:

        ```
        source venv/bin/activate
        ```

5. Install dependencies:

    ```
    pip install -r requirements.txt
    ```

6. Run migrations:

    ```
    python manage.py migrate
    ```

7. Start the Django development server:

    ```
    python manage.py runserver
    ```

8. The Django backend should now be running at `http://localhost:8000`.

### Frontend Setup

1. Navigate to the frontend directory:

    ```
    cd frontend
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Start the Next.js development server:

    ```
    npm run dev
    ```

4. The Next.js frontend should now be running at `http://localhost:3000`.

## API Endpoints

- `/api/currencies/`: GET - Retrieve a list of available currencies.
- `/api/convert/<from_currency>/<to_currency>/<amount>/`: GET - Convert currency from one to another based on the given amount.

## Contributing

Contributions are welcome! Please create an issue to discuss any major changes you would like to make.
