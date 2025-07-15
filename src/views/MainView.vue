<template>
    <main class="flex-1 p-8 overflow-y-auto pt-[90px] md:pt-8 md:ml-0">
        <div class="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
            <h3 class="text-xl font-semibold text-gray-700 mb-4">List</h3>
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Company</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Position</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date
                            of sending</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">Google</td>
                        <td class="px-6 py-4 whitespace-nowrap">Frontend Developer</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span
                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                Status waiting
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-07-01</td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">Meta</td>
                        <td class="px-6 py-4 whitespace-nowrap">UI/UX Designer</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span
                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Status accepted
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-06-28</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
export default {
    name: 'MainView',
}
</script>
