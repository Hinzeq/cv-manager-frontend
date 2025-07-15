<template>
    <div class="flex flex-row items-center justify-between md:flex-col md:items-start md:justify-start">
        <h2 class="text-2xl font-bold text-blue-600 mb-0 md:mb-8">CV Manager</h2>
    </div>
    <nav class="w-auto md:w-full">
        <ul class="flex flex-row md:flex-col space-x-4 md:space-x-0 space-y-0 md:space-y-4">
            <li>
                <router-link to="/"
                    class="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2">
                    <svg class="w-5 h-5 mr-0 md:mr-3 text-blue-500" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l9-9 9 9M5 10v9a2 2 0 002 2h4M19 10v9a2 2 0 01-2 2h-4"></path>
                    </svg>
                    <span class="hidden md:inline">Dashboard</span>
                </router-link>
            </li>
            <li>
                <router-link to="/new-entry"
                    class="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2">
                    <svg class="w-5 h-5 mr-0 md:mr-3 text-blue-500" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                        </path>
                    </svg>
                    <span class="hidden md:inline">Create new entry</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavigationComponent'
}
</script>
