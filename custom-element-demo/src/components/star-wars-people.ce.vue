<template>
    <div>
        <h1>Star Wars: The Person</h1>
        <div v-if="person">
            <h4>Character Name: {{ person.name }}</h4>
            <p>Height: {{ person.height }}</p>
            <p>Mass: {{ person.mass }}</p>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'StarWarsPeople',
        data() {
            return {
                person: undefined as Person | undefined
            }
        },
        mounted() {
            this.getStarWars()
        },
        methods: {
            getStarWars() {
                fetch('https://swapi.dev/api/people/1/')
                    .then(response => response.json())
                    .then(data => {
                        this.person = data as Person
                    })
            }
        }
    }

    class Person {
        name = '' as string;
        height = '' as string;
        mass = '' as string;
    }
</script>

<style lang="scss" scoped>

</style>