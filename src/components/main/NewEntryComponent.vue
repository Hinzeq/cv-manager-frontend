<template>
    <main class="flex-1 p-8 overflow-x-auto pt-[90px] md:pt-8 md:ml-0 ">
        <div class="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
            <h3 class="text-xl font-semibold text-gray-700 mb-4 mx-max-w-sm mx-auto">Create new entry</h3>
            <form class="max-w-sm mx-auto ">
                <div class="mb-5">
                    <label for="company" class="block mb-2 text-sm font-medium text-gray-900">Company</label>
                    <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>

                <div class="mb-5">
                    <label for="position" class="block mb-2 text-sm font-medium text-gray-900">Position</label>
                    <input type="text" id="position" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>

                <div class="mb-5">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900">TO DO DATE</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>

                <div class="mb-5">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Status</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option>send</option>
                        <option>in progress</option>
                        <option>conversation</option>
                        <option>offer</option>
                        <option>rejected</option>
                        <option>closed</option>
                    </select>
                </div>

                <div class="mb-5">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900">Jon posting URL</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>

                <div class="mb-5">
                    <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900">Expected salary</label>
                    <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                </div>

                <div class="mb-5">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Seniority level</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option>Junior</option>
                        <option>Mid</option>
                        <option>Senior</option>
                    </select>
                </div>
                
                <div class="mb-5">
                    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900">Large input</label>
                    <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500">
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    </main>
</template>

<script>
export default {
    name: "NewEntryComponent"
}
</script>
