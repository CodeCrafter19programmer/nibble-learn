# NibbleLearn

NibbleLearn is an AI-powered platform designed for schools, teachers, and students. It provides a suite of tools to support learning, creativity, and administrative tasks in an educational environment.

## Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Language**: TypeScript
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**:
    -   [Lucide React](https://lucide.dev/) (Icons)
    -   [Framer Motion](https://www.framer.com/motion/) (Animations)
    -   [Class Variance Authority (CVA)](https://cva.style/) & `clsx` (Utility composition)
-   **Fonts**: Inter and Outfit (via `next/font`)

## Project Structure

The project follows a standard Next.js App Router structure:

-   `src/app`: Contains all application routes.
    -   `(auth)`: Authentication routes (Login, Signup - currently using mock authentication).
    -   `app`: Main authenticated application area (Dashboard, Tools).
    -   `school`: School administration interface.
    -   `student`: Student interface.
    -   `components`: Reusable UI components organized by features (layout, sections, ui).

## Getting Started

1.  **Install dependencies**:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

2.  **Run the development server**:

    ```bash
    npm run dev
    ```

3.  **Open the application**:
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Authentication

Currently, the authentication flow is simulated for demonstration purposes.
-   **Teacher Login**: Redirects to `/app/dashboard`
-   **Student Login**: Redirects to `/student/dashboard`
-   **School Login**: Redirects to `/school/dashboard`

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/), the creators of Next.js.
