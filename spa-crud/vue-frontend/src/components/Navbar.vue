<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container py-2">
            <RouterLink :to="{ name: 'task' }" class="navbar-brand">
                <span>Toedoe</span>
                <strong>List</strong>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'task' }" class="nav-link">Tasks</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a href="summaries.html" class="nav-link">Summary</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'login' }" class="btn btn-outline-secondary ms-2">Login</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'register' }" class="btn btn-danger ms-2">Register</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="btn btn-outline-secondary ms-2">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>