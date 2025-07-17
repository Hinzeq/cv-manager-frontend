<template>
    <main class="flex-1 p-8 overflow-x-auto pt-[90px] md:pt-8 md:ml-0 ">
        <div class="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
            <h3 class="text-xl font-semibold text-gray-700 mb-4 mx-max-w-sm mx-auto">Create new entry</h3>
            <form @submit.prevent="handleSubmit" class="max-w-sm mx-auto ">
                <div class="mb-5">
                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900">Company</label>
                    <input v-model="formData.company" type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>

                <div class="mb-5">
                    <label for="position" class="block mb-2 text-sm font-medium text-gray-900">Position</label>
                    <input v-model="formData.position" type="text" id="position" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>

                <div class="mb-5">
                    <label for="status" class="block mb-2 text-sm font-medium text-gray-900 ">Status</label>
                    <select v-model="formData.status" id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="send">send</option>
                        <option value="in progress">in progress</option>
                        <option value="conversation">conversation</option>
                        <option value="offer">offer</option>
                        <option value="rejected">rejected</option>
                        <option value="closed">closed</option>
                    </select>
                </div>

                <div class="mb-5">
                    <label for="jobPostingUrl" class="block mb-2 text-sm font-medium text-gray-900">Jon posting URL</label>
                    <input v-model="formData.jobPostingUrl" type="text" id="jobPostingUrl" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>

                <div class="mb-5">
                    <label for="expectedSalary" class="block mb-2 text-sm font-medium text-gray-900">Expected salary</label>
                    <input v-model="formData.expectedSalary" type="number" id="expectedSalary" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>

                <div class="mb-5">
                    <label for="seniorityLevel" class="block mb-2 text-sm font-medium text-gray-900 ">Seniority level</label>
                    <select v-model="formData.seniorityLevel" id="seniorityLevel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="junior">Junior</option>
                        <option value="mid">Mid</option>
                        <option value="senior">Senior</option>
                    </select>
                </div>
                
                <div class="mb-5">
                    <label for="informations" class="block mb-2 text-sm font-medium text-gray-900">Large input</label>
                    <input v-model="formData.informations" type="text" id="informations" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500">
                </div>

                <button
                    :disabled="isLoading"
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    {{ isLoading ? 'Sending...' : 'Send' }}
                </button>
            </form>

            <div v-if="successMessage" class="text-green-500">
                {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="text-red-500">
                {{ errorMessage }}
            </div>
        </div>
    </main>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "NewEntryComponent",
    setup() {
        const formData = ref({
            company: '',
            position: '',
            status: '',
            jobPostingUrl: '',
            expectedSalary: null,
            seniorityLevel: '',
            informations: ''
        });

        const isLoading = ref(false);
        const successMessage = ref('');
        const errorMessage = ref('');

        const handleSubmit = async () => {
            isLoading.value = true;
            successMessage.value = '';
            errorMessage.value = '';

            try {
                const response = await fetch(
                    'http://cv-manager-backend.localhost/api/applications',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/ld+json'
                        },
                        body: JSON.stringify(formData.value)
                    }
                );

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.description)
                }

                successMessage.value = "Created successfully";
            } catch (err) {
                // console.log(err)
                errorMessage.value = err.message;
            } finally {
                isLoading.value = false;
                // console.log(
                //     successMessage,
                //     errorMessage
                // )
            }
        }

        return {
            formData,
            isLoading,
            successMessage,
            errorMessage,
            handleSubmit
        }
    }
}
</script>
