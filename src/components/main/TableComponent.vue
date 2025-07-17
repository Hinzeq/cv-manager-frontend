<template>
    <main class="flex-1 p-8 overflow-x-auto pt-[90px] md:pt-8 md:ml-0 ">
        <div class="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
            <p v-if="loading" class="px-12 py-12 text-gray-700 text-lg font-semibold">Loading...</p>
            <p v-if="error" class="text-red-900">{{ error }}</p>

            <table v-if="applications.length > 0" class="min-w-full divide-y divide-gray-200">
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
                    <tr v-for="application in applications" :key="application.id">
                        <td class="px-6 py-4 whitespace-nowrap">{{ application.company }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ application.position }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ application.applicationDate }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <span
                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                                :class="{
                                    'bg-gray-100 text-gray-800': ['send'].includes(application.status),
                                    'bg-green-100 text-green-800': ['offer'].includes(application.status),
                                    'bg-yellow-100 text-yellow-800': ['in progress', 'conversation'].includes(application.status),
                                    'bg-red-100 text-red-800': ['rejected', 'closed'].includes(application.status),
                                }"
                            >
                                {{ application.status }}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <a
                                :href="application.jobPostingUrl"
                                class="font-medium text-blue-600 hover:underline"
                                target="_blank"
                            >
                                Link
                            </a>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ application.expectedSalary }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ application.seniorityLevel }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ application.informations }}</td>
                    </tr>
                </tbody>
            </table>

             <p v-if="!loading && !error && applications.length == 0" class="px-12 py-12 text-gray-700 text-lg font-semibold">
                No data
             </p>
            
        </div>
    </main>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    name: "TableComponent",
    setup() {
        const applications = ref([]);
        const loading = ref(true);
        const error = ref(null);

        const fetchApplications = async () => {
            try {
                const response = await fetch('http://cv-manager-backend.localhost/api/applications?page=1');
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const responseJson = await response.json();
                if (!responseJson.member) {
                    throw new Error('Not found Data')
                }

                applications.value = responseJson.member;
            } catch (err) {
                error.value = 'Something went wrong: ' + err.message;
            } finally {
                loading.value = false;
            }
        };

        onMounted(() => {
            fetchApplications();
        });

        return {applications, loading, error};
    }
}
</script>
