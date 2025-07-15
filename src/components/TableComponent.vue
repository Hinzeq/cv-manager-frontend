<template>
    <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Application date
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Job posting url
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Expected salary
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Seniority level
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Informations
                </th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <tr>
                <td class="px-6 py-4 whitespace-nowrap">Company</td>
                <td class="px-6 py-4 whitespace-nowrap">Position</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Application date</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Status
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Job url</a>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">Expected salary</td>
                <td class="px-6 py-4 whitespace-nowrap">Seniority level</td>
                <td class="px-6 py-4 whitespace-nowrap">Informations</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "TableComponent"
}
</script>
